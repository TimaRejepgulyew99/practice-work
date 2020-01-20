<template>
  <div class="container">
    <table class="table">
      <tr class="row">
        <td class="col">Name</td>
        <td class="col">{{user.name}}</td>
      </tr>
       <tr class="row">
        <td class="col">Last Name</td>
        <td class="col">{{user.lastName}}</td>
      </tr>
       <tr class="row">
        <td class="col">Loin</td>
        <td class="col">{{user.login}}</td>
      </tr>
       <tr class="row">
        <td class="col">Password</td>
        <td class="col">{{user.password}}</td>
      </tr>
    </table>
    
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      user:this.$store.getters.getUser
    };
  },
};
</script>
<style  >
img {
  display: block;
  width: auto;
  height: 20vw;
}
textarea {
  display: block;
}
.btn {
  margin: 2vw 0;
  padding: 1vw 2vw;
  display: block;
}
</style>