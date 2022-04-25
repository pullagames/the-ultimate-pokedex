<template>
  <div class="text-xs text-gray-400">
    • {{ text }}
  </div>
</template>

<script>
export default {
  name: 'HintAtom',
  props: {
    text: {
      type: String,
      default: 'Aged chicory',
    },
  },
};
</script>
