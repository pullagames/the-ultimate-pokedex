<template>
  <div>
    <button
      v-if="!isLink"
      :disabled="isDisabled"
      class="px-4 py-3 w-full rounded-lg"
      :class="`${isDisabled ? 'bg-red-300 hover:bg-red-300' : 'bg-red-400 hover:bg-red-500 '}`"
      @click="action"
    >
      <span class="font-semibold text-red-50">
        {{ text }}
      </span>
    </button>
    <button :disabled="isDisabled" class=" w-full text-sm" @click="action" v-else>
      <span class="font-semibold text-red-400" :class="`${isDisabled ? 'text-red-300 hover:text-red-300' : 'text-red-400 hover:text-red-500 '}`">
        {{ text }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAtom',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Function,
      default: () => console.log('clicked'),
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
