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
import 'bootstrap/dist/css/bootstrap.min.css'

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

new Vue({
  el: '#appPacientes',
  data: {
      // Input nombre
      nombre: '',
      // Input edad
      edad: '',
      // Ver o no ver el formulario de actualizar
      formActualizar: false,
      // La posición de tu lista donde te gustaría actualizar 
      idActualizar: -1,
      // Input nombre dentro del formulario de actualizar
      nombreActualizar: '',
      // Input edad dentro del formulario de actualizar
      edadActualizar: '',
      // Lista de pacientes
      pacientes: [] 
  }})

  const express = require('express');

  const app = express();
  
  app.get('/', function(req, res){
    res.send('Hola Mundo Vue!');
  });
  
  app.listen(5000, function(){
    console.log('Servidor Web Express en Ejecucion');
  });