<template>
  <div>
    <!-- 双向绑定 -->
    <input type="text" v-model="msg" />
    <button v-on:click="add">添加</button>
  </div>
</template>
<script>
import bus from "../bus.js";
export default {
  data () {
    return {
      msg: ""
    };
  },
  methods: {
    add () {
      // $emit 触发事件
      bus.$emit("transMsg", this.msg);
    }
  }
};
</script>