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
        {deckId:0,mastery:10,deckName:"Weeb Shit",cardCount:5},
        {deckId:1,mastery:10,deckName:"Russian",cardCount:30},
        {deckId:2,mastery:10,deckName:"Black",cardCount:69},
        {deckId:3,mastery:10,deckName:"German",cardCount:20},
        {deckId:4,mastery:10,deckName:"Chinese",cardCount:100},
        {deckId:5,mastery:10,deckName:"Martian",cardCount:20}
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
  background-image: radial-gradient( circle farthest-corner at 0.3% 1.3%,  rgba(235,217,221,1) 0%, rgba(216,174,211,1) 45.1%, rgba(145,130,196,1) 100.2% );
}
</style>
