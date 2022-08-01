<template>
  <div>
    <button v-on:click="jian">-</button>
    {{ count }}
    <button v-on:click="jia">+</button>
  </div>
</template>
<script>
  export default {
    props: ['count', 'index'],
    methods: {
      jia() {
        // $emit触发自定义事件
        this.$emit('jia-event', this.index)
      },
      jian() {
        this.$emit('jian-event', this.index)
      }
    }
  }
</script>
