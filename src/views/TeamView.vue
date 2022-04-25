<template>
  <div class="team">
    team
    <!-- <div v-if="me && me.email">
      {{ me.email }}
    </div>

    <button @click="logout">
      logout
    </button> -->
  </div>
</template>

<script>

export default {
  name: 'TeamView',
  components: {
  },
  mounted() {
    this.$store.dispatch('auth/getMe');
  },
  computed: {
    me() {
      return this.$store.state.auth.me;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
