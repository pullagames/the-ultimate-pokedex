<template>
  <transition name="bounce" mode="out-in">
    <div class="fixed left-0 top-0 right-0 bottom-0  flex justify-center items-center p-4 lg:p-0">
      <div class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg  flex flex-col space-between w-full lg:w-2/6">
        <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-4">
          <div class="text-red-400 font-semibold">
            <slot name="title" />
          </div>

          <icon-atom :action="close">
            <template>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25" />
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25" />
              </svg>
            </template>
          </icon-atom>
        </div>
        <div class="p-4">
          <slot name="content" />
        </div>
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
          <div class="w-fit ml-auto">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconAtom from '@/components/atoms/IconAtom.vue';

export default {
  name: 'ModalAtom',
  components: {
    IconAtom,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },

};
</script>
