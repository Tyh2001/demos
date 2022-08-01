<template>
  <div>
    <h1>商品列表</h1>
    <table>
      <thead>
        <tr>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>商品数量</th>
          <th>添加至购物车</th>
        </tr>
      </thead>
      <tbody>
        <!-- 遍历商品 -->
        <tr v-for="(goods, index) in goodslist" :key="index">
          <td>{{ goods.name }}</td>
          <td>{{ goods.price }}</td>
          <td>
            <!-- 父组件给子组件传值 属性 -->
            <Count
              v-on:jia-event="jia"
              v-bind:count="goods.count"
              v-bind:index="index"
              v-on:jian-event="jian"
            ></Count>
          </td>
          <td>
            <button v-on:click="addCart(index)">添加至购物车</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // 引入按钮组件
  import Count from './count.vue'

  import bus from '../bus'

  export default {
    components: {
      Count
    },
    // data是一个有返回值的函数
    data() {
      return {
        goodslist: [
          {
            name: '香蕉',
            price: 10.5,
            count: 0
          },
          {
            name: '苹果',
            price: 5,
            count: 0
          },
          {
            name: '鸭梨',
            price: 3,
            count: 0
          }
        ]
      }
    },
    methods: {
      jia(i) {
        this.goodslist[i].count++
      },
      jian(i) {
        if (this.goodslist[i].count > 0) {
          this.goodslist[i].count--
        }
      },
      addCart(i) {
        //添加到购物车
        if (this.goodslist[i].count > 0) {
          var obj = this.clone(this.goodslist[i])
          bus.$emit('add-cart-event', obj)
        } else {
          alert('请输入商品数量!')
        }
      },
      clone(obj) {
        var newObj = {}
        for (var key in obj) {
          newObj[key] = obj[key]
        }
        return newObj
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    width: 80px;
    height: 20px;
    border: 0;
    border-radius: 4px;
  }
</style>
