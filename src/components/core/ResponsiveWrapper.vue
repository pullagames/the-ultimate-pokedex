<template>
  <div
    class=" bg-gray-100 h-full  dark:bg-gray-900 dark:text-gray-200"
    :class="fullScreen ? 'h-full auth-bg' : ''"
  >
    <div class="bg-gray-100  dark:bg-gray-900 " :class="`${fullScreen ? 'h-full': ''}`">
      <div
        class="lg:container mx-auto lg:p-4 bg-gray-100  dark:bg-gray-900 dark:text-gray-200"
        :class="fullScreen ? 'h-full lg:w-full lg:flex lg:items-center lg:justify-center' : ''"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveWrapper',
  props: {
    fullScreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
