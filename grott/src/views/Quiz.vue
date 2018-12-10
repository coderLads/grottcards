<template>
  <div id="app">
    <Navbar :user-icon="'https://i.imgur.com/WnmUCm7.png'"/>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "quiz",
  components: {
    Navbar
  }
};
</script>