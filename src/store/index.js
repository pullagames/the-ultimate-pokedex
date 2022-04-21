import Vue from 'vue';
import Vuex from 'vuex';

import loader from '@/store/modules/loader.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
  },
});
