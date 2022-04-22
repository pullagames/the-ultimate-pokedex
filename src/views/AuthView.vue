<template>
  <div class="w-full flex justify-center lg:w-4/6">
    <auth-card />
  </div>
</template>

<script>
import AuthCard from '@/components/atoms/AuthCard.vue';

export default {
  name: 'AuthView',
  components: {
    AuthCard,
  },
};
</script>

<style>

</style>
