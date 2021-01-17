import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const publicRoutes = [];
const reqRoutesCtx = require.context("../views", true, /route\.js$/);
reqRoutesCtx.keys().forEach((route) => {
  const routerModule = reqRoutesCtx(route);
  publicRoutes.push(routerModule.default || routerModule);
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 自动导入路由模块
  ...publicRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
