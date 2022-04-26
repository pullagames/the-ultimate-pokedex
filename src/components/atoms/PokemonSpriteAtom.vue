<template>
  <div class="w-full h-full flex justify-center items-center bg-gray-100 dark:bg-gray-900 rounded-lg">
    <img v-if="animated" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`" class="w-24 h-24 pixelated" alt="">
    <img v-else :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`" class="w-32 h-32 pixelated" alt="">
  </div>
</template>
<script>
export default {
  name: 'PokemonSpriteAtom',
  props: {
    id: {
      type: Number,
      default: 1,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
