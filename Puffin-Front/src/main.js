export const bus = new Vue();

import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faBuilding, faSearch, faFileImport, faSearchLocation, faFileExport, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import "@/assets/css/style.scss"
import store from './store'

library.add(faCoffee, faHome, faSearch, faBuilding, faFileImport, faFileExport, faTimesCircle, faSearchLocation)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
