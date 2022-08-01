<template>
  <div class="box">
    <h2>接下来要做什么？</h2>
    <input class="inp" type="text" v-on:keyup.enter="neirong" v-model="msg" />
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      neirong() {
        bus.$emit('transMsg', this.msg)
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-weight: 400;
    margin-left: 30px;
    color: rgb(119, 119, 119);
  }
  .box {
    width: 370px;
    height: 500px;
    border: 2px solid black;
    margin: 0 auto;
    margin-top: 150px;
  }
  .inp {
    width: 300px;
    height: 30px;
    font-size: 15px;
    padding-left: 8px;
    border: 1px solid gray;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
  }
</style>
