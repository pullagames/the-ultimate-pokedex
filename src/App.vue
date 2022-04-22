<template>
  <div id="app">
    <responsive-wrapper>
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
