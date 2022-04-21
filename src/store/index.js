import Vue from 'vue';
import Vuex from 'vuex';

import loader from '@/store/modules/loader.js';

import auth from '@/store/modules/auth.js';
import pokedex from '@/store/modules/pokedex.js';
import pokemon from '@/store/modules/pokemon.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    auth,
    pokedex,
    pokemon,
  },
});
