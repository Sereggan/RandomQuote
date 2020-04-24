<template>
  <div id="app" class="container">
    <div class="col-xs-6 col-xs-offset-3">
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
</style>
