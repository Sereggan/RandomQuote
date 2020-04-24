<template>
  <div class="main">
    <div class="main-heading">
      <h3 class="main-heading__title">Нажмите на кнопку для генерации случайной цитаты</h3>
    </div>
    <div class="main-text">{{quote.text}}</div>

    <div class="main-author">Author : {{quote.author}}</div>

    <button class="button" @click="updateQuote">Получить цитату</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateQuote() {
      this.$store.dispatch("chooseQuote");
    }
  },
  computed: {
    quote() {
      if (this.$store.getters.quote) {
        return this.$store.getters.quote;
      } else {
        return null;
      }
    }
  }
};
</script>

<style>
.main {
  font-family: "Arizonia", cursive;
  font-size: 1.5em;
  color: #6e6e6e;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5%;
}

.main-heading {
  margin: 1rem;
}
.main-text {
  margin: 1rem;
  font-size: 1.5rem;
}
.main-author {
  margin: 1rem;
}

.button {
  padding: 0.5rem;
  float: right;
  margin: 1rem 6rem;
  background-color: lightgreen;
}

.button:hover {
  cursor: pointer;
}
@media (max-width: 1000px) {
  .main {
    font-size: 2em;
  }
  .main-text {
    font-size: 1.5em;
  }
  .button {
    font-size: 1.5rem;
    float: none;
    width: 80%;
  }
}
</style>