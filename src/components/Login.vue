<template>
  <div>
    <form @submit="login">
      <h2>Login</h2>
      <label for="email">Email</label>
      <b-form-input
        type="email"
        id="email"
        v-model="email"
        placeholder="johnsmith@example.com"
      ></b-form-input>
      <label for="password">Password</label>
      <b-form-input
        type="password"
        id="password"
        v-model="password"
      ></b-form-input>
      <p></p>
      <input id="subBtn" type="submit" value="Submit" class="btn" />
    </form>
    <p></p>
    <router-link id="regLink" to="/register">Register</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`You are logged in as ${user.user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
div {
  align-content: center;
  text-align: center;
  width: 20%;
  margin-left: 40%;
  margin-right: 40%;
}

h2 {
  text-align: center;
}

label {
  padding: 5px;
}
</style>
