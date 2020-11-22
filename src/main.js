import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
