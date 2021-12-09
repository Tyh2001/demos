<template>
  <div>
    <MyForm></MyForm>
    <Fruitlist></Fruitlist>
  </div>
</template>
<script>
//引入组件
import MyForm from "./components/myForm.vue";
import Fruitlist from "./components/fruitlist.vue";

//export 输出 出口  default  默认
export default {
  components: {
    //注册组件
    MyForm,
    Fruitlist
  }
};
</script>