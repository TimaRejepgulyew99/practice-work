<template>
  <div class="container" id="app">
    <div class="d-flex flex-md-row align-items-center p-3 mb-3 bg-white shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">Turkmen tranzit</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">
          <router-link to="/">мои задачи</router-link>
        </a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>

    <router-view 
    >
      
    </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
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
</style>
