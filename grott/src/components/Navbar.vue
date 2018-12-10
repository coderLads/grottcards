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
  background: lightblue;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  border-bottom: 1px solid cadetblue;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  -moz-box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  -box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
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
  border: 1px solid blue;
  padding: 0px 10px;
  height: 30px;
}
</style>
