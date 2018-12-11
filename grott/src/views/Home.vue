<template>
  <div id="app">
    <Cards :decks="cardData"/>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Api from "@/Api";

export default {
  name: "home",
  components: {
    Cards
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