import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './components/home'
import music from './components/music'
import movie from './components/movie'
import hongkong from './components/hongkong'
import chinese from './components/chinese'
// 安装插件 只要是以vue开头的模块,都需要Vue.use()来安装
Vue.use(vueRouter)

var router = new vueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie,
      children: [
        {
          path: 'chinese',
          name: 'chinese',
          component: chinese
        },
        {
          path: 'hongkong',
          name: 'hongkong',
          component: hongkong
        }
      ]
    }
  ]
})
export default router
