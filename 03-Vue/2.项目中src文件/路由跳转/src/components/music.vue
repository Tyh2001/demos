<template>
  <div>
    <h1>音乐音乐音乐音乐音乐</h1>
    <h2>适合{{ age }}岁以下的歌曲</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      age: 0
    };
  },
  created () {
    this.age = this.$route.query.age;
  }
};
</script>