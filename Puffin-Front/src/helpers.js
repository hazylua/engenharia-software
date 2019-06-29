const fs = require('fs');
const root = __dirname + '/root';

let helper = {};

function checkFolder(root) {
    if (fs.existsSync(root)) console.log('Found the folder!');
    else fs.mkdirSync(root);
}

helper.copyToHomeFolder = function (payload) {
    const uri = root + '/' + payload.folder;
    checkFolder(uri); // check if the directory exists
    payload.files.forEach( file => {
        const fileName = file.split('\\').pop()

        fs.copyFile(file, uri+'\\'+fileName, (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination');
        });
    })
}


helper.scanHomeFolder = function () {
    let contents;

    checkFolder(root); // check if the directory exists ( in case it has been deleted by the user )
    contents = fs.readdirSync(root); // read its contents and return them as an array which we can then count
    return contents;
}

export default helper