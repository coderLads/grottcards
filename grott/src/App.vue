<template>
  <div id="app">
    <Navbar :user-icon="userIcon"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Api from "@/Api";

export default {
  name: "app",
  components: {
    Navbar
  },
  props: {
    userIcon: String
  },
  created() {
    this.userIcon = Api.getUserImage(0);
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(
    circle farthest-corner at 0.3% 1.3%,
    rgba(235, 217, 221, 1) 0%,
    rgba(216, 174, 211, 1) 45.1%,
    rgba(145, 130, 196, 1) 100.2%
  );
}
</style>
