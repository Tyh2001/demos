<template>
  <div>
    <input type="text" placeholder="接下来要做什么" v-on:keyup.enter="addList" v-model="msg" />
    <ul>
      <li v-for="(item,i) in list" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// 引入bus 空的vue 对象
import bus from "../bus.js";
export default {
  data() {
    return {
      msg: "",
      list: []
    };
  },
  methods: {
    addList() {
      var self = this;
      bus.$emit("add-list", this.msg);
      self.msg = "";
      // 在组件间传值
      // 键盘抬起后，通过bus的（空vue对象）$emit("自定义事件名称"，options)方法触发自定义事件add-list,将文本框输入的内容
      // 传递给list组件
      // list组件接收 如何接收？
      // $on ("自定义事件名称"，fn)具体的在list组件中
    }
  }
};
</script>
<style  scoped>
input{
  width:100%;
  height:70px;
  font-size: 26px;
  line-height: 25px;
  border: 0;
  outline: 0;/*文本框选中边框  */
  padding-left: 20px;
  box-sizing: border-box;/* 盒子大小 ：设置的大小是包含边框、内边距、内容
  默认是content-box设置的宽度和高度是内容的宽高
  */
  border-bottom: 1px solid #e9e5e5;
}
</style>
