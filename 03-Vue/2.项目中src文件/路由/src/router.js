import Vue from "vue";
//1.引入 vue-router
import VueRouter from "vue-router";
// 引入组件
import Home from "./views/home";
import News from "./views/news";
import user from "./views/user"

//2.在Vue中使用路由
Vue.use(VueRouter)

//3.创建路由
var router = new VueRouter({
  routes: [
    {
      //path 路径
      path: "/home",
      //指定组件
      //component 没有 s
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    //动态路由
    {
      path: "/user/:username",
      component: user,
    }
  ]
})

export default router;

