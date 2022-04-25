<template>
  <div class="text-xl font-semibold text-red-400">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'TitleAtom',
  props: {
    text: {
      type: String,
      default: 'Title Atom',
    },
  },
};
</script>
