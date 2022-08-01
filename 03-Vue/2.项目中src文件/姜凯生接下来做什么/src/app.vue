<template>
  <div class="container">
    <h1>Todo</h1>
    <div class="todo">
      <myForm></myForm>
      <fruitlist></fruitlist>
      <tabs></tabs>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import myForm from './components/myForm.vue'
  import fruitlist from './components/fruitlist.vue'
  import tabs from './components/tabs.vue'

  //export 输出 default 默认
  export default {
    components: {
      /*注册组件 */
      myForm,
      fruitlist,
      // home,
      tabs
    }
  }
</script>

<style scoped>
  .container {
    width: 60%;
    margin: 0 auto;
    border-bottom: 2px solid #e9e5e5;
    min-width: 680px;
  }
  h1 {
    font-size: 100px;
    text-align: center;
    color: rgba(255, 0, 0, 0.5);
  }
  .todo {
    background-color: white;
    padding: 20px 0;
  }
</style>
