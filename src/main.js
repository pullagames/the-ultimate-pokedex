import Vue from 'vue';
import App from '@/App.vue';

import '@/assets/css/tailwind.css';
import store from '@/store/index.js';
import router from '@/router/index.js';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
