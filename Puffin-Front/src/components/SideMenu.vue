<template>
  <div class='container full narrow dark'>
    <ul class='menu'>
      <li @click="updateView"><font-awesome-icon class='icon' icon="home" size='2x' color='grey'/></li>
      <li @click="signal({new:'window', id:'register'})"><font-awesome-icon class='icon' icon="search" size='2x' color='grey'/></li>
      <li @click="signal({new:'window', id:'import'})"><font-awesome-icon class='icon' icon="file-import" size='2x' color='grey'/></li>
      <li @click="signal({new:'window', id:'export'})"><font-awesome-icon class='icon' icon="file-export" size='2x' color='grey'/></li>
      <li @click='closeApp'><font-awesome-icon class='icon' icon="times-circle" size='2x' color='grey'/></li>
    </ul>
  </div>
</template>

<script>

import {bus} from '../main.js';
const {ipcRenderer} = require('electron');

export default {
  data(){
    return{
    }
  },
  methods:{
    closeApp(){
      ipcRenderer.send('closeApp');
    },
    signal(payload){
      ipcRenderer.send('newWindow', payload);
    },
    updateView(){
      this.$router.push("labs")
    }
  }
}
</script>

<style scoped>
  li {
    cursor: pointer;
    margin-bottom: 1.5rem;
  }
  .icon:hover{
    color: aliceblue;
  }

  .icon:focus{
    color: aliceblue;
  }

</style>
