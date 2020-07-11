<template>
  <div>
    <form @submit.prevent="pressed">
      Login
      <div class="login">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <b-button variant="outline-dark" size="sm" class="button" type="submit"
        >Enter</b-button
      >
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <span>
      Need an account? Click here to
      <router-link to="/register" class="underline">Register</router-link>
    </span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.login,
.password {
  padding-bottom: 4px;
}
.button {
  margin-bottom: 8px;
}
.underline {
  text-decoration: none;
}
</style>
