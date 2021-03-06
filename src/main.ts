import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';

Vue.prototype.$axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

Vue.config.productionTip = false;

// IziToast;
const defaultOptions = {
  position: 'bottomCenter',
  class: 'izitoast-margin',
  theme: 'dark',
};
Vue.use(VueIziToast, defaultOptions);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
