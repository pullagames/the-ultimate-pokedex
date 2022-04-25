<template>
  <div @mouseenter="isOpen = true" @focus="() => {}" @mouseleave="isOpen = false" @blur="() => {}">
    <img :src="image" alt="" class="h-10 w-10 bg-gray-300 border border-gray-400 dark:border-gray-900 dark:bg-gray-900 rounded-full">
  </div>
</template>

<script>
export default {
  name: 'AvatarAtom',

  props: {
    image: {
      type: String,
      default: 'https://64.media.tumblr.com/9ded1ed4d4a15b2d35f60e1948468784/6b8f2f57a6eab995-42/s250x400/b4a24d8e243781eeecdba5aaf0eece65f2c212d6.jpg',
    },
  },
};
</script>
