import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store";

axios.defaults.baseURL = "https://randomquotesapp.firebaseio.com/";
axios.defaults.headers.get["Accepts"] = "application/json";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
