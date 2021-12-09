<template>
  <div>
    <Goods></Goods>
    <ShoppingCar></ShoppingCar>
  </div>
</template>
<script>
// 引入组件
import Goods from "./components/goods.vue";
import ShoppingCar from "./components/shoppingCar.vue";
//export 输出 default 默认
export default {
  components: {
    /*注册组件 */
    Goods,
    ShoppingCar
  }
};
</script>

<style  scoped>
</style>