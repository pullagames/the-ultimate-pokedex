<template>
  <button :disabled="isDisabled" class="h-8 w-8 flex justify-center items-center" @click="action">
    <span class=" text-red-400" :class="`${isDisabled ? 'text-red-300 hover:text-red-300' : 'text-red-400 hover:text-red-500 '}`">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'IconAtom',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Function,
      default: () => console.log('clicked'),
    },
  },

};
</script>
