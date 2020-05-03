<template>
  <div>
    <form @submit="register">
      <h2>Register</h2>
      <label for="email">Email</label>
      <b-form-input
        type="email"
        id="email"
        v-validate="'required'"
        v-model="email"
        placeholder="johnsmith@example.com"
      ></b-form-input>
      <b-form-group label="Password">
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Enter password"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Confirm Password">
        <b-form-input v-model="confirmation" type="password"></b-form-input>
      </b-form-group>
      <p></p>
      <input id="subBtn" type="submit" value="Submit" class="btn" />
    </form>
    <p></p>
    <router-link id="logLink" to="/login"
      >Already registered? Log in</router-link
    >
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import firebase from "firebase";
Vue.use(Vuelidate);

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    //Firebase registartion function
    register: function (e) {
      if (this.password !== this.confirmation) {
        alert("Passwords do not match");
        this.errors.push();
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`Welcome ${user.user.email}`);
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
