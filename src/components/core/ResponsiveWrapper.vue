<template>
  <div class=" bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
    <div class="lg:container mx-auto p-4">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveWrapper',
};
</script>
