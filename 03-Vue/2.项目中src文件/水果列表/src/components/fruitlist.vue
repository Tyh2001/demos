<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in fruitlist" :key="index">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import bus from "../bus.js";
export default {
  data () {
    return {
      fruitlist: ["香蕉", "苹果", "鸭梨"]
    };
  },
  //挂载完成
  mounted () {
    // 挂载完成前执行函数里面的代码
    // $on去监听自定义事件  this指的不是这组件
    var self = this;
    bus.$on("transMsg", function (d) {
      self.fruitlist.push(d);
    });
  }
};
</script>
<style scoped>
li:nth-child(2n) {
  background-color: skyblue;
}
li:nth-child(2n-1) {
  background-color: yellowgreen;
}
</style>