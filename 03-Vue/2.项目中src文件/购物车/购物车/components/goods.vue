<template>
  <div>
    <h1>商品列表</h1>
    <table>
      <thead>
        <tr>
          <td>商品名称</td>
          <td>商品单价</td>
          <td>商品数量</td>
          <td>添加至购物车</td>
        </tr>
      </thead>
      <tbody>
        <!-- 遍历商品  v-for -->
        <tr v-for="(goods, index) in goodslist" :key="index">
          <td>{{ goods.name }}</td>
          <td>{{ goods.price }}</td>
          <td>
            <!-- 父组件给子组件传值 给子组件绑定属性 jia-event 自定义事件-->
            <Count
              v-on:jia-event="jia"
              v-bind:count="goods.count"
              v-bind:index="index"
              v-on:jian-event="jian"
            ></Count>
          </td>
          <td>
            <button v-on:click="addCart(index)">加入购物车</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//引入按钮组件
import Count from "./count.vue";
import bus from "../bus";

export default {
  components: {
    Count
  },
  //data是一个函数
  data: function () {
    return {
      goodslist: [
        {
          name: "香蕉",
          price: 10.5,
          count: 0
        },
        {
          name: "榴莲",
          price: 50.5,
          count: 0
        },
        {
          name: "葡萄",
          price: 5.5,
          count: 0
        }
      ]
    };
  },
  methods: {
    jia (i) {
      this.goodslist[i].count++;
    },
    jian (i) {
      if (this.goodslist[i].count > 0) {
        this.goodslist[i].count--;
      }
    },
    //添加入购物车
    addCart (i) {
      //将数组中对应的索引值的元素(对象)
      //如果数量大于0才可以添加到购物车
      if (this.goodslist[i].count > 0) {
        var obj = this.clone(this.goodslist[i]);
        bus.$emit("add-cart-event", obj);
      } else {
        //如果要添加的数量为0就弹出 "请输入商品数量!"
        alert("请输入商品数量!");
      }
    },
    clone (obj) {
      var newObj = {};
      //key是对象的属性名
      for (var key in obj) {
        newObj[key] = obj[key];
      }
      return newObj;
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
