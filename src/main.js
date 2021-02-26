import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import axios from 'axios';
import vuetify from './plugins/vuetify';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_ZPS9WMVNAPWLC8dMp7RkH");

Vue.use(emailjs)
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(Vuetify)



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


