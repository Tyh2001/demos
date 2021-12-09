<template>
  <div>
    <h2>用户列表</h2>
    <table>
      <thead>
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in users" :key="i">
          <td>{{ i }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>
            <button class="del" @click="delUser(i)">删除</button>
          </td>
        </tr>
        <tr v-if="users.length === 0">
          <p>暂时没有用户信息。。。</p>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import bus from "../bus";
export default {
  data () {
    return {
      users: [
        {
          name: "张三",
          age: 12
        },
        {
          name: "李四",
          age: 15
        }
      ]
    };
  },
  //声明周期中 挂载完成钩子函数去监听事件
  mounted () {
    var self = this;
    bus.$on("send-user", function (user) {
      self.users.push(user);
    });
    //箭头函数
    // bus.$on("send-user", user => {
    //   this.users.push(user);
    // });
  },
  methods: {
    delUser (i) {
      this.users.splice(i, 1);
    }
  }
};
</script>
<style scoped>
h2 {
  font-weight: 400;
  color: #444;
}
table {
  width: 100%;
  border-spacing: 0;
  line-height: 2.5em;
}
td {
  border-top: 1px solid black;
  padding-left: 10px;
}
thead td {
  font-weight: 400;
}
.del {
  margin-top: 10px;
  border: 0;
  background-color: #ea3545;
  color: #fff;
  border-radius: 5px;
  padding: 3px 6px;
}
</style>
