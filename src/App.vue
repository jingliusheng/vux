<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link = "/home">
        <img slot = "icon" src = "./assets/logo.png">
        <span slot = "label">Home</span>
      </tabbar-item>
      <tabbar-item link = "/index">
        <img slot = "icon" src = "./assets/logo.png">
        <span slot = "label">Index</span>
      </tabbar-item>
      <tabbar-item link = "/my">
        <img slot = "icon" src = "./assets/logo.png">
        <span slot = "label">My</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'app',
    components: {
      Tabbar,
     TabbarItem
   }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
