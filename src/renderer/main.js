import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';


import App from './App';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// Vue plugins registration
Vue.use(VueRouter);
Vue.use(Vuetify, {
  iconfont: 'fa'
});

const routes = [
  {
    path: '/home',
    component: Vue.component('home-component', require('./components/Home.vue').default)
  }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
