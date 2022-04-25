<template>
  <div
    class="px-4 py-2 rounded-lg hover:bg-red-400 dark:hover:bg-red-400 dark:hover:bg-opacity-50 dark:hover:text-red-100 hover:text-red-100 dark:hover:text-opacity-50 font-semibold "
    :class="`${active ? 'bg-red-400 dark:bg-opacity-50  dark:text-opacity-50 text-red-100' : 'bg-gray-200 text-gray-600 dark:bg-gray-900 dark:text-gray-400'}`"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'NavbarItemAtom',
  props: {
    text: {
      type: String,
      default: 'NavbarItemAtom',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
