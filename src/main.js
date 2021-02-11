import Vue from 'vue'
import App from './App.vue'
import Slider from './Slider.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Slider),
}).$mount('#slider')

