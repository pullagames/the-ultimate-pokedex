<template>
  <div
    id="app"
    class=""
  >
    <responsive-wrapper :full-screen="$route.name === 'auth' ? true : false">
      <template #content>
        <router-view />
      </template>
    </responsive-wrapper>
  </div>
</template>

<script>
import ResponsiveWrapper from '@/components/core/ResponsiveWrapper.vue';

export default {
  components: {
    ResponsiveWrapper,
  },
};
</script>
