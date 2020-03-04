import Vue from 'vue'
import VueRouter from 'vue-router'


import MarkersNew from '../views/MarkersNew.vue'

import MarkersEdit from '../views/MarkersEdit.vue'
import MarkersTable from '../views/MarkersTable.vue'

import Signup from "../views/Signup.vue";
import Login from '../views/Login.vue';
import Logout from "../views/Logout.vue";

Vue.use(VueRouter)

const routes = [
 
  {path: '/markers/table', name: 'markers-table', component: MarkersTable},
  {path: '/markers/new', name: 'markers-new', component: MarkersNew},
  {path: '/markers/:id/edit', name: 'markers-edit', component: MarkersEdit},

  { path: '/', name: 'root', component: MarkersTable },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
