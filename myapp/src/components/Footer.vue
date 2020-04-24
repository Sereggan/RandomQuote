<template>
  <div class="row">
    <div class="footer">
      <div class="footer__list">
        <a href="https://vk.com/nikolaychuks">
          <i class="fa fa-vk fa-3x"></i>
        </a>
        <a href="https://github.com/Sereggan">
          <i class="fa fa-github fa-3x"></i>
        </a>
      </div>
      <p class="footer__creator">Created by Sergey Nikolaychuk</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  min-height: 20vh;
}

.footer__list {
  display: flex;
  justify-content: center;
}

.footer__creator {
  text-align: center;
  margin: 2rem auto;
  font: 2rem "PT Sans", sans-serif;
}

a {
  margin: 0 2rem;
}
</style>