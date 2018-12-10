<template>
  <div class="navbar">
    <a href="index.html">
      <img src="../assets/logo.png">
    </a>
    <input type="text" id="search" placeholder="Search for sets">
    <div id="user-icon" @click="userMenu()">
      <img class="user-icon" :src="userIcon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    userIcon: String
  },
  methods:{
    userMenu(){
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  height: 35px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.1);
}
.navbar>*{
  margin: 0px 5px;
}

img{
  height: 35px;
  width: auto;
}
.user-icon{
  border-radius: 50%;
}
input{
  border-radius: 50px;
  border: none;
  padding: 0px 20px;
  height: 100%;
}
</style>
