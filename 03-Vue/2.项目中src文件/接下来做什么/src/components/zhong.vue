<template>
  <div>
    <ol>
      <li v-for="(rr, index) in arr" :key="index">
        {{ rr }}
        <span>X</span>
      </li>
    </ol>
  </div>
</template>

<script>
  import bus from '../bus.js'
  export default {
    data() {
      return {
        arr: ['写作业', '睡觉']
      }
    },
    mounted() {
      var self = this
      bus.$on('transMsg', function (d) {
        self.arr.push(d)
      })
    }
  }
</script>

<style scoped>
  div {
    margin-left: 550px;
    margin-top: -380px;
  }
  span {
    width: 40px;
    height: 20px;
    border: 1px solid black;
  }
</style>
