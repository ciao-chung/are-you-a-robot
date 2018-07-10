import Vue from 'vue'
import Vuex from 'vuex'
import Recaptcha from 'Store/Modules/Recaptcha'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Recaptcha,
  }
})