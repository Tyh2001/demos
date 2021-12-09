<template>
  <div>
    <div class="header">
      <router-link :to="{ name: 'home' }">首页</router-link>
      <router-link :to="{ name: 'movie' }">电影</router-link>
      <span @click="goUser">个人信息</span>
    </div>
    <div class="box">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goUser () {
      // push方法,相当于a标签里面的href
      this.$router.push("/user");
    }
  }
};
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
span {
  margin-left: 20px;
  color: aliceblue;
  font-size: 30px;
  text-decoration: underline;
}
</style>