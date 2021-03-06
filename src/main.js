import Vue from 'vue'
import App from './App'
import router from 'src/Router/index.js'
import store from 'Store/Store.js'
import translate from 'libs/Translate.js'
Vue.config.productionTip = false

window.dataLayer = window.dataLayer || []
Vue.use(translate)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})