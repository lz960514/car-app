import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
import store from '@/store'
import '@/assets/styles/wrapper.less'

Vue.use(mintUi)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')