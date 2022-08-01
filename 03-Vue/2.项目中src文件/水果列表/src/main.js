import Vue from 'vue'

//引入App组件
import App from './App.vue'

new Vue({
  el: '#app',
  //注册App组件
  components: {
    App
  },
  render: (h) => h(App)
})
