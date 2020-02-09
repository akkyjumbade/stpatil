import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   },
   {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
   },
   {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import(/* webpackChunkName: "ForgotPassword" */ '../views/ForgotPassword.vue')
   },
   {
      path: '/service/:type',
      name: 'service',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "service" */ '../views/PaymentService.vue')
   },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
   let isPrivate = to.matched.some(record => record.meta.requiresAuth)
   console.log(to)
   if(isPrivate) {
      next({
         path: '/login',
         query: to.fullPath,
      })
      return
   }
   next()
 })

export default router
