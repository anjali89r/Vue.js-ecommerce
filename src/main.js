import Vue from 'vue';
//window.Vue = Vue;
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import store from './store/store';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://ecommerce198904.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
})

/*eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
