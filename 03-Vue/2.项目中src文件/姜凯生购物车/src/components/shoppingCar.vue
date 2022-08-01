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
        <tr v-for="(item, index) in shoppinglist" :key="index">
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
            <button @click="del(index)">删除</button>
          </td>
        </tr>
        <tr>
          <td align="right">总价：</td>
          <td colspan="3">￥{{ totalPrice }}元</td>
        </tr>
      </tbody>
    </table>
    <button class="butt" @click="jiezhang">结账</button>
  </div>
</template>
<script>
  import Count from './count'
  import bus from '../bus'
  export default {
    components: {
      Count
    },
    data() {
      return {
        shoppinglist: [],
        totalPrice: 0
      }
    },
    //钩子函数 挂载完成
    mounted() {
      var self = this
      bus.$on('add-cart-event', function (d) {
        //传过来的商品是否在购物车中已经存在
        for (var i = 0; i < self.shoppinglist.length; i++) {
          //如果存在
          if (d.name == self.shoppinglist[i].name) {
            // 两个数量相加
            self.shoppinglist[i].count += d.count
            //计算总价钱
            self.getTotalPrice()
            //停止函数
            return
          }
        }
        self.shoppinglist.push(d)
        //计算总价钱
        self.getTotalPrice()
      })
    },
    methods: {
      jia(i) {
        this.shoppinglist[i].count++
        this.getTotalPrice()
      },
      jian(i) {
        if (this.shoppinglist[i].count > 0) {
          this.shoppinglist[i].count--
          this.getTotalPrice()
        }
      },
      del(i) {
        this.shoppinglist.splice(i, 1)
        //调用计算总价函数
        this.getTotalPrice()
      },
      //计算总价钱
      getTotalPrice() {
        // var total = 0;
        // for (var i = 0; i < this.shoppinglist.length; i++) {
        //   total += this.shoppinglist[i].count * this.shoppinglist[i].price;
        // }
        // alert("您一共消费了：" + total + "元");
        this.totalPrice = 0
        for (var i = 0; i < this.shoppinglist.length; i++) {
          this.totalPrice +=
            this.shoppinglist[i].count * this.shoppinglist[i].price
        }
      },
      jiezhang() {
        this.getTotalPrice()
        alert('您消费了' + this.totalPrice + '元')
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  td,
  th {
    border: 1px solid rgb(194, 189, 189);
  }
  table {
    width: 400px;
    text-align: center;
    border-spacing: 0;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: skyblue;
  }
  .butt {
    background-color: aquamarine;
  }
  h1 {
    margin-top: 40px;
  }
</style>
