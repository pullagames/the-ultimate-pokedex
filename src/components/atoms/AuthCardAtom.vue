<template>
  <div class="flex flex-col lg:flex-row h-full w-full justify-center rounded-lg">
    <div class="pattern-1 bg-red-400 lg:w-3/6 xl:w-3/5 p-8 lg:rounded-l-lg">
      <slot name="contentSlotOne" />
    </div>
    <div class="bg-white dark:bg-gray-800 lg:w-3/6 xl:w-2/5 p-8 lg:rounded-r-lg flex-1">
      <slot name="contentSlotTwo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCardAtom',
};
</script>
