<template>
  <div class="about">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h1>Tasks</h1>
          <b-list-group v-bind:key="task.id" v-for="task in tasks">
            <draggable v-model="exampleList">
              <b-list-group-item
                class="droppable"
                variant="secondary"
                v-bind:tasks="task"
              >
                {{ task.title }}
                <b-button
                  class="float-right"
                  pill
                  variant="outline-danger"
                  size="sm"
                  v-on:click="deleteEvent(task.id)"
                  >Delete</b-button
                >
              </b-list-group-item>
            </draggable>
          </b-list-group>
        </b-col>
        <b-col cols="9"><Calendar /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Calendar from "../components/Calendar";
import { db } from "@/main";
import firebase from "firebase";
import draggable from "vuedraggable";

export default {
  components: {
    Calendar,
    draggable,
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
