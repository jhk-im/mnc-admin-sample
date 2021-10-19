<template>
  <v-app>
    <v-container fluid fill-height id="login-page">
      <v-layout align-center justify-center>
        <v-flex :style="{ 'max-width': '400px' }">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-3 text-center">KB 증권방송 CMS</div>
            </template>
            <v-card-text>
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </v-card-text>
          </base-material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
#login-page {
  background-color: #807456;
}
</style>

<script>
export default {
  name: "Auth",
};
</script>
