<template>
  <div>
    <h1>电影</h1>
    <button @click="fanhui">返回</button>
  </div>
</template>

<script>
  export default {
    methods: {
      fanhui() {
        //$router 路由的一些方法
        //go()方法 -1是返回上一页,1是下一页,都是返回浏览记录中的上一页下一页
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  a {
    margin-left: 20px;
    color: aliceblue;
    font-size: 20px;
  }
</style>
