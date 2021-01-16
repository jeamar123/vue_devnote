import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://localhost:3000';
axios.defaults.user_id = null;


// import Auth from './views/Auth.vue'
import { Dashboard } from './views/Dashboard'
import { Topics } from './views/Topics'
import { Note } from './views/Note'



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
      redirect: '/topics',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Topics', path: '/topics', component: Topics },
        { name: 'Note', path: '/note/:id', component: Note },
      ]
    },
    
  ]
})
