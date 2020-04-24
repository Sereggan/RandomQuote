<template>
  <div class="row">
    <div class="col-xs-12">
      <ul class="nav nav-tabs">
        <router-link to="/" exactActiveClass="active" tag="li">
          <a>Show Quotes</a>
        </router-link>
        <router-link to="/addQuote" activeClass="active" tag="li">
          <a>Add quote</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.row {
  margin-bottom: 4rem;
}
</style>