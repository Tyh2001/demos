<template>
  <div>
    <button v-on:click="jian">-</button>
    {{ count }}
    <!-- 给自定义传值 -->
    <button v-on:click="jia">+</button>
  </div>
</template>
<script>
  export default {
    //接收
    props: ['count', 'index'],
    methods: {
      jia() {
        //$emit 触发自定义事件
        this.$emit('jia-event', this.index)
      },
      jian() {
        this.$emit('jian-event', this.index)
      },
      addCart(i) {
        bus.$emit('add-cart-event', function () {})
      }
    }
  }
</script>
