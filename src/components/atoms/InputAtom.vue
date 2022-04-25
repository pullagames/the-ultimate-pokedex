<template>
  <input
    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 rounded-lg
          outline-none hover:border-red-400 focus:border-red-400 dark:hover:border-red-400 dark:focus:border-red-400
          text-gray-400 placeholder-gray-400 dark:border-gray-600"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('getValue', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'InputAtom',

  props: {
    placeholder: {
      type: String,
      default: 'Input atom',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
};
</script>
