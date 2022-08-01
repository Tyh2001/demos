<template>
  <div>
    <div class="header">
      <router-link :to="{ name: 'home' }">首页</router-link>
      <router-link :to="{ name: 'movie' }">电影</router-link>
      <router-link :to="{ name: 'music' }">音乐</router-link>
    </div>
    <div class="box">
      <!-- 留坑,显示对应组件内容 -->
      <router-view></router-view>
    </div>
    <div class="footer">
      <h1>底部</h1>
    </div>
  </div>
</template>

<script>
  // import home from "./components/home.vue";
  export default {}
</script>
<style scoped>
  .header {
    height: 40px;
    background-color: yellowgreen;
  }
  .footer {
    height: 100px;
    background-color: skyblue;
    overflow: hidden;
  }
  .box {
    height: 200px;
    background-color: pink;
    overflow: hidden;
  }
  a {
    margin-left: 20px;
    color: aliceblue;
    font-size: 30px;
  }
  .header .router-link-active {
    background-color: rgb(118, 134, 87);
    color: #000;
  }
</style>
