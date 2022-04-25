import Vue from 'vue';
import App from '@/App.vue';

import '@/assets/css/tailwind.css';

import store from '@/store/index.js';
import router from '@/router/index.js';
import storage from '@/utils/storage.js';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  mounted() {
    const creds = { x: storage.getItem('access'), y: storage.getItem('refresh') };

    if (creds.x && creds.y) {
      router.push({ name: 'home' }).catch((err) => {});
    } else {
      router.push({ name: 'auth' }).catch((err) => {});
    }
  },
  render: (h) => h(App),
}).$mount('#app');
