<template>
  <button
    class=" bg-purple-400 p-4"
    @click="onClick"
  >
    <!-- @slot default inner button content -->
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit('click');
    },
  },
};
</script>
