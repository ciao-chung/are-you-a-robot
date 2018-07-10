import Vue from 'vue'
import Router from 'vue-router'
import PageHome from 'Pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    }
  ]
})
