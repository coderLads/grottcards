<template>
  <div id="app">
    <Navbar :user-icon='"https://i.imgur.com/WnmUCm7.png"'/>
    <Cards :decks="cardData"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cards from './components/Cards.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    Cards
  },
  data:()=>{
    return {
      cardData: [
        {deckId:0,deckName:"Weeb Shit",cardCount:5},
        {deckId:1,deckName:"Russian",cardCount:30},
        {deckId:3,deckName:"German",cardCount:20}
      ]
    }
  }
}

</script>

<style>
body,html{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% );
}
</style>
