import Vue from 'vue'
import App from './App.vue'
import Slider from './components/Slider.vue'
import InfoIndex from './components/InfoIndex.vue'
import VideoIndex from './components/VideoIndex.vue'
import Footer from './components/Footer.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Slider),
}).$mount('#slider')

new Vue({
  render: h => h(InfoIndex),
}).$mount('#infoindex')

new Vue({
  render: h => h(VideoIndex),
}).$mount('#videoindex')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')