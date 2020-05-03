<template>
  <div class="container" align="center">
    <h1>Calendar</h1>
    <CreateTask />
    <Calendar />
  </div>
</template>

<script>
import Calendar from "../components/Calendar";
import { db } from "@/main";
import firebase from "firebase";
import CreateTask from "../components/CreateTask";

export default {
  components: {
    Calendar,
    CreateTask,
  },

  data: () => ({
    tasks: [],
  }),

  mounted() {
    this.getEvents();
  },

  methods: {
    async getEvents() {
      let snapshot = await db
        .collection(firebase.auth().currentUser.email)
        .get();
      const tasks = [];
      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        tasks.push(appData);
        console.log(doc.id, " => ", doc.data());
      });
      this.tasks = tasks;
    },
  },
};
</script>

<style scoped>
.about {
  text-align: center;
  align-content: center;
}
</style>
