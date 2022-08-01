<template>
  <div>
    <header>
      头部
      <br />
      <!-- <a href="#/home">首页</a>
      <a href="#/music">音乐</a>
      <a href="#/movie">电影</a> -->

      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/music">音乐</router-link>
      <router-link to="/movie">电影</router-link>-->

      <router-link :to="{ name: 'home' }">首页</router-link>
      <router-link :to="{ name: 'music' }">音乐</router-link>
      <router-link
        :to="{
          name: 'movie',
          params: { movieId: '99999', moviename: '战狼Ⅲ' }
        }"
        >战狼Ⅲ</router-link
      >
      <router-link
        :to="{
          name: 'movie',
          params: { movieId: '88888', moviename: '狼图腾' }
        }"
        >狼图腾</router-link
      >
      <router-link
        :to="{
          name: 'movie',
          params: { movieId: '77777', moviename: '大人物' }
        }"
        >大人物</router-link
      >
      <router-link :to="{ name: 'music', query: { age: 12 } }"
        >按年龄查询</router-link
      >
    </header>
    <!-- 留坑 -->
    <div class="box">
      <router-view></router-view>
    </div>
    <footer>底部</footer>
  </div>
</template>
<script>
  import home from './components/home.vue'
  export default {}
</script>
<style scoped>
  header {
    height: 100px;
    background-color: yellowgreen;
  }
  footer {
    height: 100px;
    background-color: skyblue;
  }
  .box {
    height: 200px;
    background-color: pink;
    overflow: hidden;
  }
  a {
    margin-left: 20px;
    color: aliceblue;
  }
</style>

// Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ // 一 二 三 四 五 六 七 八 九 十 // 1 2 3 4 5 6 7 8 9 10
// ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ // 壹 贰 叁 肆 伍 陆 柒 捌 玖 拾
