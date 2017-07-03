import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home';
import Hello from '@/components/index';
import My from '@/components/my';
import Nav from '@/components/nav/navcom';
import Nav1 from '@/components/nav/nav1';
import Nav2 from '@/components/nav/nav2';
import Nav3 from '@/components/nav/nav3';
import Nav4 from '@/components/nav/nav4';
Vue.use(Router);
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '',name: 'default',component: Home},
    {path: '/home',name:'home',component: Home},
    {path: '/index',name:'index',component: Hello},
    {path: '/my',name: 'my',component: My},
    {path: '/nav',component: Nav,
      children:[
        {path: '',component: Nav1},
        {path: 'nav1',component: Nav1},
        {path: 'nav2',component: Nav2},
        {path: 'nav3',component: Nav3},
        {path: 'nav4',component: Nav4}
      ]
    },
    {path: '/nav1',name: 'Nav1',component: Nav1},
    {path: '/nav2',name: 'Nav2',component: Nav2},
    {path: '/nav3',name: 'Nav3',component: Nav3},
    {path: '/nav4',name: 'Nav4',component: Nav4}
  ],
})
