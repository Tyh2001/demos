<template>
  <div>
    <ul>
      <li>
        <!-- to 的属性和router里的path值对应 -->
        <!-- 使用 router-link 组件在导航 -->
        <!-- 通过属性 to 确定指定链接 -->
        <!-- router-link 默认会被渲染成 a 标签 -->
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/user/张三">用户</router-link>
      </li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由对应组件的内容加载到router-view标签下 -->
    <router-view></router-view>
  </div>
</template>
