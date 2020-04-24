<template>
  <div class="main">
    <div class="main-heading">
      <div class="panel-heading">
        <h3 class="main-heading__title">Введите цитату и автора</h3>
      </div>
      <div class="main-heading__text">
        <p>Quote: {{quote}}</p>
        <input type="text" v-model="quote" />
      </div>
      <div class="main-heading__text">
        <p>Author: {{author}}</p>
        <input type="text" v-model="author" />
      </div>
    </div>
    <div class="col-xs-offset-9">
      <button
        class="button"
        :class="{'green':(quote),'red':(!(quote))}"
        @click="addQuote"
        :disabled="!(quote)"
      >Добавить цитату</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quote: "",
      author: ""
    };
  },
  methods: {
    addQuote() {
      if (!author) {
        this.author = "Unknown";
      }
      const newQuote = {
        text: this.quote,
        author: this.author
      };
      this.$store.dispatch("addQuote", newQuote);
      this.quote = "";
      this.author = "";
    }
  }
};
</script>

<style scoped>
.button {
  color: black;
}
.green {
  background-color: lightgreen;
}
.red {
  background-color: rgb(209, 107, 107);
}
@media (max-width: 1000px) {
  input {
    padding: 2em;
    width: 30em;
    border: 1px solid gray;
    height: 2em;
  }
}
</style>