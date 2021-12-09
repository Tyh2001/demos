<template>
  <div>
    <h1>购物车列表</h1>
    <table>
      <thead>
        <tr>
          <td>商品名称</td>
          <td>商品单价</td>
          <td>商品数量</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shoppinglist" v-bind:key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <Count
              v-on:jia-event="jia"
              v-bind:count="item.count"
              v-bind:index="index"
              v-on:jian-event="jian"
            ></Count>
          </td>
          <td>
            <button v-on:click="del(index)">删除</button>
          </td>
        </tr>
        <tr>
          <!-- colspan合并列  rowspan合并行 -->
          <td style="text-align: right">总价:</td>
          <td colspan="3">￥{{ totalPrice }}元</td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="getTotalPrice">结算</button>
  </div>
</template>

<script>
//引入count组件
import Count from "./count";
import bus from "../bus";
export default {
  components: {
    Count
  },
  data () {
    return {
      shoppinglist: [],
      totalPrice: 0
    };
  },
  //钩子函数 挂载完成时
  mounted () {
    var self = this;
    bus.$on("add-cart-event", function (d) {
      //传过来的商品是否在购物车中已经存在
      for (var i = 0; i < self.shoppinglist.length; i++) {
        //如果存在
        if (d.name == self.shoppinglist[i].name) {
          //两个数量相加
          self.shoppinglist[i].count += d.count;
          //加完数量后中止函数
          return;
        }
      }
      self.shoppinglist.push(d);
    });
  },
  //删除
  methods: {
    jia (i) {
      this.shoppinglist[i].count++;
      this.totalPrice = 0;
      for (var i = 0; i < this.shoppinglist.length; i++) {
        this.totalPrice +=
          this.shoppinglist[i].count * this.shoppinglist[i].price;
      }
    },
    jian (i) {
      if (this.shoppinglist[i].count > 0) {
        this.shoppinglist[i].count--;
      }
    },
    del (i) {
      this.shoppinglist.splice(i, 1);
    },
    getTotalPrice () {
      var total = 0;
      for (var i = 0; i < this.shoppinglist.length; i++) {
        total += this.shoppinglist[i].count * this.shoppinglist[i].price;
      }
      alert("您一共消费了:" + total + "元!");
    }
  }
};
</script>

<style scoped>
table {
  width: 600px;
}
td {
  border: 1px solid black;
}
</style>
// 2017.9-2017.12
// 2018.3-2018.8
// 2018.9-2018.12
// 2019.3-2019.8
// 2019.9-2019.12    -
// 2020.3-2020.8
// 2020.9-2020.12
// 2021.3-2021.8
