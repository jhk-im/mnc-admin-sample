<template>
  <v-form ref="form" @submit.prevent="validate">
    <!-- <div class="text-right text-body-2">
      <router-link :to="{ name: 'register' }">
        {{ $t("auth.register") }} &gt;
      </router-link>
    </div> -->

    <v-text-field
      :label="$t('auth.username')"
      prepend-icon="mdi-account"
      v-model="form.username"
      required
      :error-messages="errorMessages.email"
    ></v-text-field>

    <!-- <div class="text-right text-body-2">
      <router-link :to="{ name: 'forgot_password' }">
        {{ $t("auth.forgot_password") }} &gt;
      </router-link>
    </div> -->

    <v-text-field
      :label="$t('auth.password')"
      prepend-icon="mdi-lock"
      type="password"
      v-model="form.password"
      required
      :error-messages="errorMessages.password"
    ></v-text-field>

    <div class="text-center">
      <v-btn
        :loading="loading"
        color="primary"
        large
        type="submit"
        text
        rounded
        >{{ $t("auth.sign_in") }}</v-btn
      >
    </div>
  </v-form>
</template>

<script>
//import { mapActions } from "vuex";
//import AuthService from "../../services/auth.service";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errorMessages: {},
      loading: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.errorMessages = {};
        if (this.form.username.length <= 0) {
          this.errorMessages = { email: [this.$t("error.auth.username")] };
          console.log(this.form.username);
          return;
        } else if (this.form.password.length <= 0) {
          console.log(this.form.password);
          this.errorMessages = { password: [this.$t("error.auth.password")] };
          return;
        }

        this.loading = true;
        this.$store
          .dispatch("auth/login", this.form)
          .then((response) => {
            console.log(response);
            const msg = response.message;
            if (response.code == 200) {
              this.$router.push("/dashboard");
            } else if (response.code == 400) {
              if (msg.includes("비밀번호")) {
                this.errorMessages = { password: msg };
              } else {
                this.errorMessages = { email: msg };
              }
            } else {
              this.errorMessages = { email: msg };
            }
            this.loading = false;
          })
          .catch((e) => {
            this.loading = false;
            console.log(e);
            this.errorMessages = { email: e.data.errorMessages };
          });
      }
    },
  },
};
</script>

<style scoped>
#login-page {
  background-color: var(--v-primary-lighten5);
}
</style>
