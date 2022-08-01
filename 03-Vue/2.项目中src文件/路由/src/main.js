import Vue from 'vue'
import App from './App'

//引入路由
import a from './router'

new Vue({
  el: '#app',
  render: (h) => h(App),
  //注册路由
  router: a
})
