<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
