import Vue from 'vue'
import App from './App'
import router from 'src/Router/index.js'
import store from 'Store/Store.js'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
