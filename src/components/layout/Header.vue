<template>
  <header class="header">
    <h1>PRJ400 Virtual Planner</h1>
    <div id="nav">
      <router-link class="link" tag="BIconListCheck" to="/"></router-link>
      <router-link class="link" tag="BIconCalendar" to="/about"></router-link>
      <div id="nav2">
        <button v-if="isLoggedIn" v-on:click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import {
  BootstrapVue,
  BIcon,
  BIconCalendar,
  BIconListCheck,
  BIconBoxArrowLeft,
} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconCalendar", BIconCalendar);
Vue.component("BIconListCheck", BIconListCheck);
Vue.component("BIconBoxArrowLeft", BIconBoxArrowLeft);

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  //Sets cuurent user equal to email of user
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    //Triggers firebase logout function
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
  },
};
</script>

<style scoped>
.header {
  background: rgb(53, 124, 148);
  color: white;
  text-align: center;
  padding: 10px;
}

.header a {
  color: white;
  padding-right: 5px;
}

.link {
  width: 55px;
  font-size: 60px;
}

svg:hover {
  color: black;
}

svg:active {
  color: gold;
}
</style>
