<template>
  <div>
    <swiper auto loop :list = "demo01_list" dots-position = "center" v-model = "demo01_index"></swiper>
    <group-title>垂直方向文字滚动</group-title>
    <swiper class = "text-scroll" auto loop height = "30px" direction = "vertical" :interval = 2000 :show-dots = "false"
            v-model = "demo02_index">
      <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得100金币</p></swiper-item>
      <swiper-item><p>义务爱了 德玛西亚 获得200金币</p></swiper-item>
      <swiper-item><p>基本世神 畅玩级礼包 消耗300金币</p></swiper-item>
      <swiper-item><p>做迎而為 饿了么 消耗400金币</p></swiper-item>
      <swiper-item><p>亚瑟 巫妖王的诱惑 消耗500金币</p></swiper-item>
    </swiper>
    <group-title>根据宽度，动态计算高度</group-title>
    <swiper :aspect-ratio = "300/800" v-model = "demo01_index" :list = "demo01_list"></swiper>
    <group-title>有子路由的导航</group-title>
    <tabbar>
      <tabbar-item link = "/nav">
        <img slot = "icon" src = "../assets/logo.png">
        <span slot = "label">点击进导航</span>
      </tabbar-item>
    </tabbar>
    <group-title>导航</group-title>
    <tabbar>
      <tabbar-item link = "/nav1">
        <img slot = "icon" src = "../assets/logo.png">
        <span slot = "label">入口1</span>
      </tabbar-item>
      <tabbar-item link = "/nav2">
      <img slot = "icon" src = "../assets/logo.png">
      <span slot = "label">入口2</span>
      </tabbar-item>
      <tabbar-item link = "/nav3">
      <img slot = "icon" src = "../assets/logo.png">
      <span slot = "label">入口3</span>
      </tabbar-item>
      <tabbar-item link = "/nav4">
      <img slot = "icon" src = "../assets/logo.png">
      <span slot = "label">入口4</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, GroupTitle, Tabbar, TabbarItem } from 'vux'
  var baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }];
  export default {
    data() {
      return {
        demo01_list: baseList,
        demo01_index: 0,
        demo02_index: 3
      }
    },
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang = "less" scoped>
  @import '../../static/home.less';
  .weui-tabbar {
    position: static;
  }
</style>
