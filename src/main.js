import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Slider from './components/Slider.vue'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  store,
  render: h => h(Slider)
}).$mount('#slider')