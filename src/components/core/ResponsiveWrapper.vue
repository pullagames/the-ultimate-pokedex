<template>
  <div
    class=" bg-gray-100  dark:bg-gray-800"
    :class="fullScreen ? 'h-screen' : ''"
  >
    <div
      class="lg:container mx-auto p-4"
      :class="fullScreen ? 'lg:h-full lg:w-full lg:flex lg:items-center lg:justify-center' : ''"
    >
      <slot name="content" />
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

<style>

</style>
