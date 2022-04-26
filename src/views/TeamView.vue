<template>
  <div class="team p-4 lg:p-0 h-full">
    <div class="flex justify-between w-full lg:w-fit">
      <div class="w-full">
        <input-atom placeholder="Nom du pokemon" class="w-full lg:w-64" @getValue="setFilter({ filter: 'name', value: $event })" />
      </div>
    </div>
    <div v-if="team && team.results && team.results.length > 0" class=" pt-4 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center">
      <pokemon-card-atom v-for="pokemon in team.results" :key="pokemon.pokedex_creature" :pokemon="pokemon" is-editable :remove="remove.bind(null, pokemon.id)">
        <template #extra>
          <div class="flex flex-col space-y-2">
            <div class="flex items-center space-x-2">
              <div class="flex space-x-2">
                <div class="text-red-400 font-semibold">
                  Niveau
                </div>
                <div class="text-red-400">
                  {{ pokemon.level }}
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2  dark:bg-gray-900">
                <div class="bg-red-400 h-2 rounded-full flex justify-end items-center" :style="`width: ${(String(pokemon.experience).slice(-2) * 100 / 100)}%`">
                  <div class="relative font-semibold text-white bg-red-400 rounded-lg  px-1  flex justify-center items-center" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <icon-atom :action="reward.bind(null, {pokemon: pokemon, value: 25 })">
              <template>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.75V18.25" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 12L5.75 12" />
                </svg>
              </template>
            </icon-atom>
          </div>
        </template>
      </pokemon-card-atom>
    </div>
    <div v-if="team && team.results && team.results.length === 0" class="flex justify-center items-center mt-16 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div class="text-red-400 font-semibold">
        Aucun pokémon trouvé
      </div>
    </div>
  </div>
</template>

<script>
import InputAtom from '@/components/atoms/InputAtom.vue';
import PokemonCardAtom from '@/components/atoms/PokemonCardAtom.vue';
import IconAtom from '@/components/atoms/IconAtom.vue';
import motion from '@/utils/motion.js';

export default {
  name: 'TeamView',
  components: {
    InputAtom,
    PokemonCardAtom,
    IconAtom,
  },
  async mounted() {
    await this.$store.dispatch('auth/getMe');
    await this.$store.dispatch('pokemon/setFilter', { filter: 'name', value: undefined });
    await this.$store.dispatch('pokemon/getAll');
  },

  computed: {
    team() {
      return this.$store.state.pokemon.pokemons;
    },
  },
  methods: {
    async setFilter(combo) {
      await this.$store.dispatch('pokemon/setFilter', combo);
      await this.$store.dispatch('pokemon/getAll');
    },
    async remove(id) {
      await this.$store.dispatch('pokemon/remove', id);
    },
    async reward(payload) {
      await this.$store.dispatch('pokemon/reward', { id: payload.pokemon.id, value: payload.value });
    },
  },
};
</script>
