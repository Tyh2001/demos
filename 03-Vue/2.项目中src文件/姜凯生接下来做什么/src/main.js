import Vue from "vue";
import App from "./app.vue";
// 引入css import url
import "./assets/css/global.css"


new Vue({
    components:{
        App,
    },
    render:(h)=>h(App)
}).$mount("#app");