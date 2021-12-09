<template>
  <div>
    <Goods></Goods>
    <Cart></Cart>
  </div>
</template>

<script>
//引入商品组件
import Goods from "./components/goods";
// 引入购物车
import Cart from "./components/shoppingcart";
export default {
  //注册组件
  components: {
    Goods,
    Cart
  }
};
</script>
