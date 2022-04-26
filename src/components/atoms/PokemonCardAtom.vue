<template>
  <div @click="action" @mouseover="hover = true" @mouseleave="hover = false" @blur="() => {}" @focus="() => {}" class="w-full rounded-lg bg-white dark:bg-gray-800 p-4  border border-gray-200 hover:border-red-400 dark:hover:border-red-400 dark:border-gray-600 justify-self-center flex flex-col space-y-4">
    <div class="flex items-center justify-between">
      <title-atom :text="pokemon.name || pokemon.nickname" />
      <icon-atom v-if="isEditable" :action="remove">
        <template>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25" />
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25" />
          </svg>
        </template>
      </icon-atom>
    </div>
    <pokemon-sprite-atom :animated="hover" class="py-4" :id="pokemon.ref_number || pokemon.pokedex_creature" />
    <slot name="extra" />
  </div>
</template>

<script>
import PokemonSpriteAtom from '@/components/atoms/PokemonSpriteAtom.vue';
import TitleAtom from '@/components/atoms/TitleAtom.vue';
import IconAtom from '@/components/atoms/IconAtom.vue';

export default {
  name: 'PokemonCardAtom',
  data() {
    return {
      hover: false,
    };
  },

  components: {
    PokemonSpriteAtom,
    TitleAtom,
    IconAtom,
  },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
    action: {
      type: Function,
      default: () => {},
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
