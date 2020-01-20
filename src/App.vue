<template>
  <div class="container height-100" id="app">
    <div class="d-flex flex-md-row align-items-center p-3 mb-3 bg-white shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">Turkmen tranzit</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link class="p-2 text-dark" to="/">главная</router-link>
        <router-link class="p-2 text-dark" to="/news">новости</router-link>
      </nav>
      <router-link class="btn btn-outline-primary" to="/profile">Мой аккаунт</router-link>
    </div>

    <router-view class="height"></router-view>
    <footer class=" footer border shadow-sm p-3">
      <router-link class="p-2 text-dark" :to="'/'">главная</router-link><br>
      <router-link class="p-2 text-dark" to="/news">новости</router-link><br>
      <router-link class="p-2 text-dark" to="/profile">Мой аккаунт</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {}
};
</script>

<style>
a {
  color: black;
  text-decoration: none;
}
.short-form {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 10vw;
  white-space: nowrap;
  
}
.height{
  min-height:74vh;
}
</style>
