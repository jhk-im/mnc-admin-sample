<template>
  <v-app>
    <v-container fluid fill-height id="login-page">
      <v-layout>
        <v-flex>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
};
</script>
