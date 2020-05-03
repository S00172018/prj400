<template>
  <div>
    <b-list-group class="listy" v-bind:key="task.id" v-for="task in tasks">
      <b-list-group-item v-bind:tasks="task" :variant="colour(task)">
        {{ task.title }} │ {{ task.start.substring(0, 10) }}
        <b-button
          class="float-right"
          id="cal-modal"
          pill
          variant="outline-danger"
          size="sm"
          v-on:click="deleteEvent(task.id)"
          >Delete</b-button
        >
        <b-button
          class="float-right"
          pill
          variant="outline-danger"
          size="sm"
          v-on:click="sendInfo(task.id)"
          v-b-modal.modal-2
          >Edit Event</b-button
        >
      </b-list-group-item>
    </b-list-group>

    <b-modal id="modal-2" title="Edit Event" ok-only hide-footer="true">
      <form @submit="updateEvent()">
        <label for="titleBox">Title</label>
        <b-form-input
          id="titleBox"
          type="text"
          name="title"
          v-model="title"
          class="text"
        ></b-form-input>
        <input id="subBtn" type="submit" value="Update" class="btn" />
      </form>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import { db } from "@/main";
import { ListGroupPlugin } from "bootstrap-vue";
import moment from "moment";
import { ButtonPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(ListGroupPlugin);
Vue.use(moment);
Vue.use(ButtonPlugin);
Vue.use(ModalPlugin);

export default {
  name: "Todos",

  data: () => ({
    tasks: [],
    selectedTask: null,
  }),

  mounted() {
    this.getEvents();

    console.log(this.tasks);
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

    async deleteEvent(event) {
      await db
        .collection(firebase.auth().currentUser.email)
        .doc(event)
        .delete();
      this.getEvents();
    },

    sendInfo(task) {
      this.selectedTask = task;
      console.log(this.selectedTask);
    },

    async updateEvent() {
      console.log(this.selectedTask);

      await db
        .collection(firebase.auth().currentUser.email)
        .doc(this.selectedTask)
        .update({
          title: this.title,
        });
      this.getEvents();
    },

    colour(task) {
      if (task.backgroundColor == "red") {
        return "danger";
      } else return "secondary";
    },
  },
};
</script>

<style scoped>
.task-priority {
  background: orange;
}

#subBtn {
  width: 40%;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
