<template>
  <main class="cards">
    <router-link
      :to="'/quiz/' + deck.deckId "
      class="card"
      v-for="deck in decks"
      :key="deck.deckId"
    >
      <div class="deck-title">{{deck.deckName}}</div>
      <div class="card-mastery">{{deck.mastery}}% mastered</div>
      <div class="card-count">{{deck.cardCount}} cards</div>
    </router-link>
  </main>
</template>

<script>
export default {
  name: "DeckDisplay",

  props: {
    decks: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: black;
  text-decoration: none;
}

.cards {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
  margin: auto;
}
.card {
  margin: 15px;
  height: 150px;
  width: 350px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 125px 25px;
  grid-template-columns: 1fr 1fr;
  transition: all 0.25s ease;
  cursor: pointer;
}
.card:hover {
  box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2);
}

.deck-title {
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  grid-column-end: span 2;
}
.card-count,
.card-mastery {
  padding: 0px 5px;
}
.card-count {
  text-align: right;
}
.card-mastery {
  text-align: left;
}
</style>
