import Vue from "vue";

//引入配置好的路由 router.js 文件
import router from "./router";

import app from "./app";
new Vue({
  router: router,
  render: h => h(app)
}).$mount("#app")
