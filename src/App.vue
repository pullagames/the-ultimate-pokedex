<template>
  <div id="app">
    {{ projectName }}
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      projectName: process.env.VUE_APP_PROJECT_NAME,
    };
  },
};
</script>
