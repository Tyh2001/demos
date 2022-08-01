<template>
  <div>
    <h1>电影</h1>
    <router-link :to="{ name: 'chinese' }">大陆电影</router-link>
    <router-link :to="{ name: 'hongkong' }">香港电影</router-link>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  a {
    margin-left: 20px;
    color: aliceblue;
    font-size: 20px;
  }
</style>
