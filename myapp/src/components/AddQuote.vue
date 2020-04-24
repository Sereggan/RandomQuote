<template>
  <div class="row">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Введите цитату и автора</h3>
      </div>
      <div class="panel-body">
        <p>Quote: {{quote}}</p>
        <input type="text" v-model="quote" />
      </div>
      <div class="panel-body">
        <p>Author: {{author}}</p>
        <input type="text" v-model="author" />
      </div>
    </div>
    <div class="col-xs-offset-9">
      <button
        class="btn"
        :class="{'btn-success':(quote&&author),'btn-danger':(!(quote&&author))}"
        @click="addQuote"
        :disabled="!(quote&&author)"
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
      const newQuote = {
        text: this.quote,
        author: this.author
      };
      this.$store.dispatch("addQuote", newQuote);
    }
  }
};
</script>

<style scoped>
.panel-body {
  font-size: 24px;
  color: #6e6e6e;
}
</style>