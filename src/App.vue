<template>
  <div id="app" :class="`${isDarkMode === 'true' ? 'dark' : ''}`">
    <navbar-molecule v-if="$route.name !== 'auth'" />
    <responsive-wrapper :full-screen="$route.name === 'auth' ? true : false">
      <template>
        <router-view :key="$route.fullPath" />
      </template>
    </responsive-wrapper>
  </div>
</template>

<script>
import ResponsiveWrapper from '@/components/core/ResponsiveWrapper.vue';

import NavbarMolecule from '@/components/molecules/NavbarMolecule.vue';

import storage from '@/utils/storage.js';

export default {
  components: {
    ResponsiveWrapper,
    NavbarMolecule,
  },
  mounted() {
    this.$store.dispatch('theme/setDarkMode', storage.getItem('isDarkMode') || 'false');
  },
  computed: {
    isDarkMode() {
      return this.$store.state.theme.isDarkMode;
    },
  },
};
</script>
