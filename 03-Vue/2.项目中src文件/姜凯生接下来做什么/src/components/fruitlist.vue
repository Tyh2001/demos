<template>
  <div>
    <ul>
      <!-- 不同状态，在显示与隐藏之间切换 -->
      <li
        v-for="(fruit, index) in fruitList"
        :key="index"
        v-show="fruit.isShow"
      >
        <span
          v-bind:class="{ checked: fruit.isChecked }"
          class="no-checked"
          @click="toggle(index)"
        ></span>
        <span v-bind:class="{ 'checked-text': fruit.isChecked }" class="txt">{{
          fruit.text
        }}</span>
        <span v-on:click="remove(index)" class="del">X</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import bus from '../bus.js'
  export default {
    data() {
      return {
        fruitList: [
          {
            text: '字符串',
            //控制是否被选中，样式的不同显示状态
            isChecked: true,
            // 控制元素显示与隐藏
            isShow: true
          }
        ]
      }
    },
    // 挂载完成
    //挂载完成之前，执行函数里面的代码
    //在bus上通过$on（"自定义事件名称"，fn）方法绑定自定义事件,并且在回调函数（fn）上，接收参数并处理数据，在$on()方法中this指向
    //的是bus,并不是我们的组件，所有在$on ()中不能直接使用this
    //this指向的不是这个组件
    mounted() {
      var self = this
      bus.$on('add-list', function (d) {
        var obj = {}
        obj.text = d
        obj.isChecked = false
        obj.isShow = true
        self.fruitList.push(obj)
        this.$emit('chuan-list', self.fruitList)
      })
      // 显示已完成的事项
      bus.$on('show-completed', function () {
        //对列表数组遍历
        for (var i = 0; i < self.fruitList.length; i++) {
          if (self.fruitList[i].isChecked) {
            self.fruitList[i].isShow = true
          } else {
            self.fruitList[i].isShow = false
          }
        }
      })
      //显示正在做的事项
      bus.$on('show-active', function () {
        for (var i = 0; i < self.fruitList.length; i++) {
          if (self.fruitList[i].isChecked === false) {
            self.fruitList[i].isShow = true
          } else {
            self.fruitList[i].isShow = false
          }
        }
      })
      // 显示全部
      bus.$on('show-all', function () {
        for (var i = 0; i < self.fruitList.length; i++) {
          self.fruitList[i].isShow = true
        }
      })
      //删除已完成事项
      bus.$on('remove-completed', function () {
        for (var i = 0; i < self.fruitList.length; i++) {
          if (self.fruitList[i].isChecked == true) {
            self.fruitList.splice(i, 1)
            i--
          }
        }
      })
    },
    methods: {
      remove(i) {
        // 通过索引删除元素
        this.fruitList.splice(i, 1)
      },
      toggle(i) {
        //非假即真，非真即假
        this.fruitList[i].isChecked = !this.fruitList[i].isChecked
        bus.$emit('chuan-list', this.fruitList)
      }
    }
  }
</script>
<style scoped>
  li {
    height: 65px;
    padding: 0 20px;
    line-height: 4.5em;
    border-bottom: 1px solid #ecebeb;
  }
  .no-checked {
    width: 20px;
    height: 20px;
    border: 2px solid #666;
    border-radius: 50%;
  }
  .checked {
    background-color: red;
  }
  span {
    display: inline-block; /*行内块元素  */
    vertical-align: middle; /*垂直方向对齐：居中  */
  }
  .txt {
    color: #333;
    margin-left: 40px;
  }
  .checked-text {
    text-decoration: line-through;
    color: #777;
    /*a标签 text-decoration:
   none; 去下划线
   unserline:加下划线
   line-through:删除线
  */
  }
  .del {
    float: right;
    color: rgba(255, 0, 0, 0.7);
    font-weight: bold; /* 文字加粗 */
    margin-right: -10px;
    display: none;
  }
  li:hover .del {
    display: block;
  }
  /* .show {
  display: block;
}
.hide {
  display: none;
} */
</style>
