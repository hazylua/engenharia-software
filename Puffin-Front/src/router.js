import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/labinfo',
      name: 'labinfo',
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/labs",
      name:"labs",
      component: () => import("@/views/Labs.vue")
    }
  ]
})
