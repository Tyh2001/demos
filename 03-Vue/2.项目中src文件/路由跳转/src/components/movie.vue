<template>
  <div>
    <h1>电影电影电影电影电影</h1>
    <p>这是{{ title }}电影</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    created() {
      this.title = this.$route.params.moviename
    },
    // 监听 监听数据变化
    watch: {
      // 监听$route是否发生变化,如果发生变化执行函数中的代码
      $route: function (to, from) {
        // to 代表去哪里
        // from 代表从哪里来
        this.title = to.params.moviename
      }
    }
  }
</script>
