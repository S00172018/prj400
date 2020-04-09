import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

firebase.initializeApp(
  {
  apiKey: "AIzaSyByprBB-D5e_urHCJKuyFCLTOjv5hJEPXg",
  authDomain: "prj400-34382.firebaseapp.com",
  databaseURL: "https://prj400-34382.firebaseio.com",
  projectId: "prj400-34382",
  storageBucket: "prj400-34382.appspot.com",
  messagingSenderId: "345490410251",
  appId: "1:345490410251:web:44df66ae6de97b938a700e",
  measurementId: "G-J6EDWQ6WV9"
  }
)

export const db = firebase.firestore();

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
  }
});