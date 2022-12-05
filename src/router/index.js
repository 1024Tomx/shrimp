import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component:()=>import("@/pages/home/home.vue")
      },
      {
        path:'/favor',
        component:()=>import("@/pages/favor/favor.vue")
      },
      {
        path:'/info',
        component:()=>import("@/pages/info/info.vue")
      },
      {
        path:'/order',
        component:()=>import("@/pages/order/order.vue")
      }
  ]
})

export default router
