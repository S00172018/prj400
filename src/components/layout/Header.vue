<template>
  <header class="header">
    <h1>PRJ400 Productivity Application</h1>
    <div id="nav">
      <router-link class="link" tag="BIconListCheck" to="/">Task Manager</router-link>
      <router-link class="link" tag="BIconCalendar" to="/about">Task Manager</router-link>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import {
  BootstrapVue,
  BIcon,
  BIconCalendar,
  BIconListCheck
} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconCalendar", BIconCalendar);
Vue.component("BIconListCheck", BIconListCheck);

export default {
  name: "Header"
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
  width: 50px;
  font-size: 60px;
}

svg:hover {
  color: black;
}

svg:active {
  color: gold;
}
</style>