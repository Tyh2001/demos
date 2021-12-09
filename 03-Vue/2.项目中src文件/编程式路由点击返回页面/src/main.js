import Vue from "vue";
import app from "./app";
import router from "./router";
new Vue({
  router,
  render: h => h(app)
}).$mount("#app")