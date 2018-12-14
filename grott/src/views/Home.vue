<template>
  <div id="app">
    <deck-display :decks="cardData"/>
  </div>
</template>

<script>
import DeckDisplay from "@/components/DeckDisplay.vue";
import Api from "@/Api";

export default {
  name: "home",
  components: {
    DeckDisplay
  },

  data() {
    return {
      loading: true,
      cardData: []
    };
  },

  created() {
    Api.getUserCards().then(
      response => (this.cardData = Array.from(response.data))
    );
  }
};
</script>