<template>
<main class="cards">
  <div class="card" v-for="deck in decks" :key="deck.deckId">
    <div class="deck-title">{{deck.deckName}}</div>
    <div class="card-count">{{deck.cardCount}} cards</div>
  </div>
</main>
</template>



<script>

export default {
  name: 'Cards',
  props: {
    decks: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card{
  height: 150px;
  width: 350px;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  -moz-box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  display: grid;
  grid-template-rows: 125px 25px;
}
.deck-title {
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
}
.card-count {
  text-align: right;
  padding-right: 10px;
}
</style>
