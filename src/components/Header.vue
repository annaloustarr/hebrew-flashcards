<template>
  <div class="header">
    <span v-if="loggedIn">
      <span class="purple" @click="signOut">Log Out</span>
    </span>
    <span v-else>
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
};
</script>

<style scoped>
.header {
  margin-top: 20px;
  font-weight: bold;
  color: #2c3e50;
  padding: 4px;
  padding-right: 8px;
}
.header a {
  text-decoration: none;
}
.purple {
  color: rgb(95, 14, 95);
}
</style>