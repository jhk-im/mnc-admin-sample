<template>
  <v-main>
    <v-container fluid>
      <router-view :key="$route.path" />
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "DefaultView",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
};
</script>
