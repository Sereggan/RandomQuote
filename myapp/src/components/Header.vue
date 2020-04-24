<template>
  <div class="header">
    <ul class="header__nav">
      <router-link to="/" exactActiveClass="active" tag="li" class="header__nav__item">
        <p>Show Quotes</p>
      </router-link>
      <router-link to="/addQuote" activeClass="active" tag="li" class="header__nav__item">
        <p>Add quote</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  margin: 2rem 0;
}
.header__nav {
  display: flex;
  justify-content: start;
  align-items: center;
}

.header__nav__item {
  margin: 0 1rem;
  padding: 1rem;

  border-radius: 8%;
  border: 1px solid lightblue;
}
.header__nav__item:hover,
.active {
  cursor: pointer;
  background-color: lightcyan;
}
li {
  list-style: none;
}
@media (max-width: 1000px) {
  .header__nav__item {
    width: 45%;
  }
}
</style>