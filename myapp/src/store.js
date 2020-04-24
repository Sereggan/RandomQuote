import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quote: {
      text: "empty",
      author: ""
    }
  },
  mutations: {
    storeQuote(state, newQuote) {
      state.quote = newQuote;
    }
  },
  actions: {
    chooseQuote({ commit, getters }) {
      axios
        .get("https://randomquotesapp.firebaseio.com/quotes.json")
        .then(response => {
          const quotes = [];
          const data = response.data;
          for (let key in data) {
            quotes.push(data[key]);
          }
          let len = quotes.length;
          let id = Math.floor(0 + Math.random() * len);
          let newQuote = quotes[id];
          commit("storeQuote", newQuote);
        });
    },
    addQuote({ commit }, newQuote) {
      axios.post(
        "https://randomquotesapp.firebaseio.com/quotes.json",
        newQuote
      );
    }
  },
  getters: {
    quote(state) {
      return !state.quote ? null : state.quote;
    }
  }
});
