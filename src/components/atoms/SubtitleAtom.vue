<template>
  <div class="text-sm text-gray-400">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SubtitleAtom',
  props: {
    text: {
      type: String,
      default: 'Subtitle Atom',
    },
  },
};
</script>
