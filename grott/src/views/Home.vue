<template>
  <div id="app">
    <Navbar :user-icon="'https://i.imgur.com/WnmUCm7.png'"/>
    <Cards :decks="cardData"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cards from "../components/Cards.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Cards
  },
  data: () => {
    return {
      cardData: [
        { deckId: 0, mastery: 10, deckName: "Weeb Shit", cardCount: 5 },
        { deckId: 1, mastery: 10, deckName: "Russian", cardCount: 30 },
        { deckId: 2, mastery: 10, deckName: "Black", cardCount: 69 },
        { deckId: 3, mastery: 10, deckName: "German", cardCount: 20 },
        { deckId: 4, mastery: 10, deckName: "Chinese", cardCount: 100 },
        { deckId: 5, mastery: 10, deckName: "Martian", cardCount: 20 }
      ]
    };
  }
};
</script>