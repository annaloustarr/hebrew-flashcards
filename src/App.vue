<template>
  <div id="app">
    <h1>Hebrew Flashcards</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>|
      <!-- <router-link to="/login">Login</router-link>| -->
      <router-link to="/add">Add</router-link>
      <!-- <router-link to="/update">Update</router-link> -->
    </div>
    <router-view />
    <top-header></top-header>
  </div>
</template>
<script>
import TopHeader from "./components/Header";
export default {
  components: { "top-header": TopHeader }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 4px;
  padding-right: 8px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
