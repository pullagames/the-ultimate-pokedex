<template>
  <div class="home p-4 lg:p-0">
    <div class="flex justify-between w-full lg:w-fit">
      <div class="w-full">
        <input-atom placeholder="Nom du pokemon" class="w-full lg:w-64" @getValue="setFilter({ filter: 'name', value: $event })" />
      </div>
    </div>

    <div v-infinite-scroll="loadMorePokemons" infinite-scroll-disabled="busy" infinite-scroll-distance="0" class=" pt-4 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center">
      <pokemon-card-atom :action="showModal.bind(null, pokemon.id)" v-for="pokemon in pokemons.results" :key="pokemon.id" :pokemon="pokemon" />
    </div>

    <modal-atom v-show="isModalVisible" @close="closeModal">
      <template #title>
        <div class="">
          {{ selection.name }}
        </div>
      </template>
      <template #content>
        <div class="flex flex-col space-y-2">
          <div class="flex items-center space-x-4">
            <div>HP: </div>
            <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-900">
              <div class="bg-red-400 h-2 rounded-full flex justify-end items-center" :style="`width: ${selection.hp > 100 ? '100' : selection.hp}%`">
                <div class="relative font-semibold text-white bg-red-400 rounded-lg  px-1 border border-gray-200 dark:border-gray-900  flex justify-center items-center">
                  {{ selection.hp }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center space-x-4">
            <div>Attaque: </div>
            <div class="w-full justify-self-end bg-gray-200 rounded-full  dark:bg-gray-900">
              <div class="bg-red-400 h-2 rounded-full flex justify-end items-center" :style="`width: ${selection.attack > 100 ? '100' : selection.attack}%`">
                <div class="relative font-semibold text-white bg-red-400 rounded-lg  px-1 border border-gray-200 dark:border-gray-900  flex justify-center items-center">
                  {{ selection.attack }}
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div>Defense: </div>
            <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-900">
              <div class="bg-red-400 h-2 rounded-full flex justify-end items-center" :style="`width: ${selection.defense > 100 ? '100' : selection.defense}%`">
                <div class="relative font-semibold text-white bg-red-400 rounded-lg  px-1 border border-gray-200 dark:border-gray-900 flex justify-center items-center">
                  {{ selection.defense }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div>Vitesse: </div>
            <div class="w-full bg-gray-200 rounded-full  dark:bg-gray-900">
              <div class="bg-red-400 h-2 rounded-full flex justify-end items-center" :style="`width: ${selection.speed > 100 ? '100' : selection.speed}%`">
                <div class="relative font-semibold text-white bg-red-400 rounded-lg  px-1 border border-gray-200 dark:border-gray-900  flex justify-center items-center">
                  {{ selection.speed }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <button-atom :action="addPokemon" text="Ajouter à mon équipe" />
      </template>
    </modal-atom>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import PokemonCardAtom from '@/components/atoms/PokemonCardAtom.vue';
import InputAtom from '@/components/atoms/InputAtom.vue';
import ModalAtom from '@/components/atoms/ModalAtom.vue';
import ButtonAtom from '@/components/atoms/ButtonAtom.vue';

export default {
  name: 'HomeView',
  components: {
    PokemonCardAtom,
    InputAtom,
    ModalAtom,
    ButtonAtom,
  },
  directives: { infiniteScroll },
  async mounted() {
    await this.$store.dispatch('auth/getMe');
    await this.$store.dispatch('pokedex/setFilter', { filter: 'name', value: undefined });
    await this.$store.dispatch('pokedex/getAll');
  },
  data() {
    return {
      busy: false,
      isModalVisible: false,
    };
  },
  computed: {
    me() {
      return this.$store.state.auth.me;
    },
    pokemons() {
      return this.$store.state.pokedex.pokemons;
    },
    selection() {
      return this.$store.state.pokedex.selection;
    },
  },
  methods: {
    loadMorePokemons() {
      this.busy = true;
      setTimeout(() => {
        this.$store.dispatch('pokedex/getNext');
        this.busy = false;
      }, 250);
    },
    async setFilter(combo) {
      await this.$store.dispatch('pokedex/setFilter', combo);
      await this.$store.dispatch('pokedex/getAll');
    },
    async showModal(id) {
      await this.$store.dispatch('pokedex/getOne', id);
      this.isModalVisible = true;
    },
    async closeModal() {
      await this.$store.commit('pokedex/SET_SELECTION', {});
      this.isModalVisible = false;
    },
    async addPokemon() {
      const payload = {
        pokedex_creature: this.selection.ref_number,
        trainer: this.me.id,
        nickname: this.selection.name,
        experience: 0,
      };
      this.$store.dispatch('pokemon/add', payload);
      this.isModalVisible = false;
    },
  },
};
</script>
