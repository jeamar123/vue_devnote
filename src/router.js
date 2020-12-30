import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://localhost:3000';
axios.defaults.user_id = null;


// import Auth from './views/Auth.vue'
import { Dashboard } from './views/Dashboard'



Vue.use(Router)
Vue.use(axios)


export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/'},
    // { path: '/auth', name: 'Auth', component: Auth },
    {
      path: '/',
      name: 'Dashboard',
      // redirect: '/auth',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        // { name: 'Clinic', path: '/dashboard/clinic', component: Clinic },
      ]
    },
    
  ]
})
