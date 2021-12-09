<template>
  <div class="container">
    <!-- 3.挂载组件 -->
    <myForm></myForm>
    <userList></userList>
  </div>
</template>

<script>
//引入myForm组件
import myForm from "./components/myForm";
import userList from "./components/userList";
export default {
  //注册组件
  components: {
    myForm,
    userList
  }
};
</script>
<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
