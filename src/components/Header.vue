<template>
  <div class="header">
    Logged in -
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button class="but" @click="signOut">Sign out</button>
    </div>
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
}
</style>