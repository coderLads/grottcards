<template>
  <div id="app">
    <div id="quiz-container">
      <div id="quiz-title">Russian</div>
      <div id="quiz-stats">
        <div id="mastery">10% mastered</div>
        <div id="cards">100 cards</div>
      </div>
      <div id="mode-selector">
        <router-link class="mode-link" :to="'/flip/' + $route.params.id ">Flip!</router-link>
        <router-link class="mode-link" :to="'/match/' + $route.params.id ">Match!</router-link>
        <router-link class="mode-link" :to="'/test/' + $route.params.id ">Test!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz",

  components: {}
};
</script>

<style scoped>
#quiz-container {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.1);
  width: 900px;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  display: grid;
  grid-template-rows: 100px 30px 50px;
}

#quiz-title {
  font-size: 50px;
  line-height: 100px;
}

#quiz-stats {
  display: flex;
  justify-content: space-around;
}

#mode-selector {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  line-height: 50px;
}

#mode-selector > * {
  text-decoration: none;
  color: black;
}
</style>
