<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "MNC-ADMIN-SAMPLE",
    titleTemplate: "%s | Mnc Admin Sample",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>
