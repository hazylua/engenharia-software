<template>
  <div class="absolute-center col">
    <img class="icon" src="../assets/img/icon.png" alt="Prairie Dog">
    <input class="form-text med" type="text" placeholder="Usuario" v-model="user.id">
    <input class="form-text med" type="password" placeholder="Senha" v-model="user.password">
    <div>
      <button class="btn btn--med" @click="Login()">Login</button>
      <button class="btn btn--small btn--red" @click="fecharApp">Exit</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
const { ipcRenderer } = require("electron");

export default {
  data() {
    return {
      user: {
        id: "",
        password: "",
        auth: false
      }
    };
  },
  methods: {
    Login: function() {
      axios
        .post("http://localhost:8000/usuario/login", this.user)
        .then(res => {
          if (res.data.code) {
            alert("Horray!")
            this.$router.push("labs");
          }
          else {
            this.user.id = '',
            this.user.password = ''
            alert("Usuario ou senha invalidos!")
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    auth(){
      if(this.auth) return 1
      else return 0
    },
    fecharApp() {
      ipcRenderer.send("closeApp");
    }
  }
};
</script>