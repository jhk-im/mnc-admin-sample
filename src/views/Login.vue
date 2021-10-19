<template>
  <v-form ref="form" @submit.prevent="validate">
    <v-text-field
      prepend-icon="mdi-account"
      placeholder="Username"
      v-model="form.username"
      required
      :error-messages="errorMessages.email"
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-lock"
      type="password"
      placeholder="Password"
      v-model="form.password"
      required
      :error-messages="errorMessages.password"
    ></v-text-field>

    <div class="text-center">
      <v-btn :loading="loading" color="#807456" large type="submit" text rounded
        >로그인</v-btn
      >
    </div>
  </v-form>
</template>

<script>
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
      this.$router.push("/");
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.errorMessages = {};
        if (this.form.username.length <= 0) {
          this.errorMessages = { email: ["아이디를 입력해 주세요"] };
          console.log(this.form.username);
          return;
        } else if (this.form.password.length <= 0) {
          console.log(this.form.password);
          this.errorMessages = { password: ["패스워드를 입력해 주세요"] };
          return;
        }

        this.loading = true;
        this.$store
          .dispatch("auth/login", this.form)
          .then((response) => {
            console.log(response);
            const msg = response.message;
            if (response.code == 200) {
              this.$router.push("/");
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
