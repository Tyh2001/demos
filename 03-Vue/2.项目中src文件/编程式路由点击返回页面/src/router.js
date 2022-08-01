import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './components/home'
import movie from './components/movie'
import user from './components/user'
import NoFound from './components/NoFound'

// 安装插件 只要是以vue开头的模块,都需要Vue.use()来安装
Vue.use(vueRouter)

var router = new vueRouter({
  routes: [
    //重定向 redirect 重定向到哪里就进入网站看到哪个页面
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    //404 这条路由规则写在所有路由最后面
    //访问页面不存在
    {
      path: '*',
      component: NoFound
    }
  ]
})
export default router
