import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import page2 from '../views/Page2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
// router.beforeEach((to, from, next) => {
//   console.log('This is activate : ', to+from+next)
// })
export default router
