// 引入 vue 
import Vue from "vue"

// 引入app组件
import app from "./app"
new Vue({
  el: "#app",
  components: {
    app,
  },
  render: (h) => h(app),
})