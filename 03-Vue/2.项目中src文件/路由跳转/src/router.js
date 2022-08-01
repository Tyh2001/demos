//引入vue-router
import Vue from 'vue'
import vueRouter from 'vue-router'
//引入组件
import home from './components/home'
import music from './components/music'
import movie from './components/movie'

//安装插件
Vue.use(vueRouter)

//创建router对象,并且配置路由规则
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
      //动态路由,以冒号开头,冒号后面可以自定义名称
      path: '/movie/:movieId/:moviename',
      name: 'movie',
      component: movie
    }
  ]
})

export default router
