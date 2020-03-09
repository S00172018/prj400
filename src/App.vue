<template>
  <div id="app">
    <v-app>
      <v-content>
        <Header/>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
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
  name: "app",
  components: {
    Header,
    BootstrapVue,
    BIcon
  },

  data: () => ({
    //
  })
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>