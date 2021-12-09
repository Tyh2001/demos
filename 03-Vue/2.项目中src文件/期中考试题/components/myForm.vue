<template>
  <div>
    <label for>用户名:</label>
    <input type="text" v-model="name" />
    <p class="small">请输入用户名</p>
    <label for>年龄:</label>
    <input type="text" v-model="age" />
    <p class="small">请输入年龄</p>
    <button class="add" @click="jia">添加</button>
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data () {
    return {
      name: "",
      age: ""
    };
  },
  methods: {
    jia () {
      bus.$emit("send-user", {
        name: this.name,
        age: this.name
      });
    }
  }
};
</script>
<style scoped>
label {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}
input {
  display: block;
  width: 80%;
  height: 30px;
  padding-left: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  outline: 0;
}
input:focus {
  border: 1px solid blue;
  box-shadow: 0 0 0 2px skyblue;
}
.small {
  margin: 0;
  font-size: 12px;
}
.add {
  margin-top: 10px;
  border: 0;
  background-color: #0069d9;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>


