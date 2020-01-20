<template>
  <form @submit="logining()" class="ml-auto mr-auto col-5">
    <div class="form-group">
      <label for="exampleInputEmail1">Логин</label>
      <input
        v-model="login"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text" :class="isCorrectlogin">{{loginError}}</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Пароль</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
      <small id="passwordHelp" class="form-text" :class="isCorrectPassword">{{ passwordError }}</small>
    </div>
    <button class="col-4 btn btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      loginError: "введите логин",
      passwordError: "введите пароль",
      isCorrectlogin: { "text-danger": false },
      isCorrectPassword: { "text-danger": false },
      submit: true,
      user: this.$store.getters.getUser
    };
  },
  watch: {
    login: function validation(val, oldVal) {
      if (val.length == 0) {
        this.loginError = "введите логин";
        this.isCorrectlogin = { "text-danger": true };
      }
      else{
         this.loginError = "";
         this.isCorrectPassword = { "text-danger": false };
      }
    },
    password: function validationPass(val, oldVal) {
      if (val.length == 0) {
        this.passwordError = "введите пороль";
        this.isCorrectPassword = { "text-danger": true };
      } else if (val.length < 5) {
        this.passwordError = "cлишком короткий пароль";
        this.isCorrectPassword = { "text-danger": true };
      }
      else{
         this.passwordError = "";
         this.isCorrectPassword = { "text-danger": false };
      }
    }
  },
  methods: {
    logining() {
      this.$store.dispatch("logIn", {
        login: this.login,
        password: this.password
      });
      if (this.$store.getters.authUser == true) {
        this.$router.push("/profile");
      } else {
        this.$router.push("/login");
      }
    }
  }
  // beforeRouteEnter(to, from, next) {
  //   if (to.meta.requireAuth=='false') {

  //     next(false);
  //   }
  //   else{
  //     next(true)
  //   }
  // }
};
</script>