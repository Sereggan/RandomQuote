<template>
  <div class="row">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">Нажмите на кнопку для генерации случайной цитаты</h3>
      </div>
      <div class="panel-body">{{quote.text}}</div>
      <div class="col-xs-offset-6">
        <div class="panel-body author">Author : {{quote.author}}</div>
      </div>
    </div>
    <div class="col-xs-offset-9">
      <button class="btn btn-success" @click="updateQuote">Получить цитату</button>
    </div>
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

<style scoped>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
</style>