'use strict'

import helper from './helpers'
import { app, protocol, BrowserWindow, ipcMain, dialog } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let extra = {};

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })


function createExtraWindow(payload){
  extra[payload.id] = new BrowserWindow({width: 300, height: 250})
  extra[payload.id].on('closed', ()=>{
    extra[payload.id] = null
  })
  extra[payload.id].loadURL(`${__dirname}/extra/${payload.id}.html`)
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 700, height: 700, frame:false })
  win.setMenu(null); // remove default menu
  
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    //if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }


  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    await installVueDevtools()
  }
  createWindow()

  ipcMain.on('newWindow', (e, payload)=>{
    createExtraWindow(payload)
  })

  ipcMain.on('files:save', (e, files) => {
    console.log(files);
    helper.copyToHomeFolder(files);
  })

  ipcMain.on('closeApp', (e) => {
    app.quit();
  });

  ipcMain.on('search', e => {
    const files = helper.scanHomeFolder();
    e.sender.send('scan:files', files);
  });

  ipcMain.on('dialog', (e) => {
    const options = {
      //title: 'Open a file or folder',
      //defaultPath: '/path/to/something/',
      //buttonLabel: 'Do it',
      /*filters: [
        { name: 'xml', extensions: ['xml'] }
      ],*/
      properties: ['multiSelections'],
      //message: 'This message will only be shown on macOS'
    };
    dialog.showOpenDialog(null, options, (filePaths) => {
      e.sender.send('file-paths', filePaths);
    });
  })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
