import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'IndexView',
      component: () => import('@/views/IndexView.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/Home/Detail.vue'),
      meta: {
        title: '详情页面'
      }
    },
    {
      path: '/mine/more',
      name: 'MoreView',
      component: () => import('@/views/Mine/More.vue'),
      meta: {
        title: '更多设置'
      }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '用户登录'
      }
    }
  ]
})