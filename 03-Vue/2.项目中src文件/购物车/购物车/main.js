//引入vue 在node_modules里找
import Vue from "vue";

// 引入组件
import app from "./app";

new Vue({
  el: "#app",
  //注册组件
  components: {
    app,
  },
  //挂载组件
  render: (h) => h(app),
})
