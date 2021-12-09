<template>
  <div class="helper">
    <span class="leave">{{num}}项未做</span>
    <span class="tablist">
      <span class="all" @click="showAll">全部</span>
      <span class="active" @click="showActive">正在进行</span>
      <span class="completed" @click="showCompleted">已完成</span>
    </span>
    <span class="remove" @click="removeComplete">删除已完成项目</span>
  </div>
</template>

<script>
import bus from "../bus.js";

export default {
  data() {
    return {
      num: 0,
      // 存储所作事项数组里面的值（d）
      arr:[],
    };
  },
  mounted() {
    var self = this;
    bus.$on("chuan-list", function(d) {
      self.arr=d,
      self.num = 0;
      for (var i = 0; i < d.length; i++) {
        if (d[i].isChecked === false) {
          self.num++;
        }
      }

    });
  },
  methods:{
    showActive(){
      bus.$emit("show-active");           
    },
    showAll(){
      bus.$emit("show-all");
    },
    showCompleted(){
      bus.$emit("show-completed");
    },
    removeComplete(){
      bus.$emit("remove-completed");

    }
  }
};
</script>

<style scoped>
.helper {
  padding: 10px 5px 0px;
  line-height: 2em;
}
.leave {
  padding: 5px 8px;
  border: 1px solid pink;
  border-radius: 4px;
}
.tablist {
  position: absolute;
  left: 0;
  right: 0;
  width: 50%;
  margin: 0 auto;
}
.tablist span {
  padding: 5px 8px;
  border: 1px solid pink;
  border-radius: 4px;
  margin: 0 15px;
  cursor: pointer; /* 光标变小手 */
}

.remove {
  float: right;
  padding: 5px 8px;
  border: 1px solid pink;
  border-radius: 4px;
}
</style>