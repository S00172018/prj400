<template>
  <div>
    <b-button v-b-modal.modal-1>Create Event</b-button>
    <b-modal id="modal-1" title="Create Task" ok-only hide-footer="true">
      <form @submit="addEvent">
        <label for="titleBox">Title and Date (Required)</label>
        <b-form-input
          id="titleBox"
          type="text"
          name="title"
          v-model="title"
          placeholder="Create Task"
          class="textbox"
        ></b-form-input>
        <b-form-datepicker
          id="example-datepicker"
          v-model="start"
          class="mb-2"
        ></b-form-datepicker>
        <b-form-textarea
          id="textarea"
          v-model="description"
          placeholder="Enter description (optional)..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <label for="timePickerStart">Start</label>
              <b-form-timepicker
                class="timePick"
                id="timePickerStart"
                v-model="startTime"
                locale="en"
              ></b-form-timepicker>
            </b-col>
            <b-col>
              <label for="timePickerEnd">End</label>
              <b-form-timepicker
                class="timePick"
                id="timePickerEnd"
                v-model="endTime"
                locale="en"
              ></b-form-timepicker>
            </b-col>
          </b-row>
        </b-container>
        <b-form-checkbox
          class="pri"
          size="lg"
          type="checkbox"
          name="priority"
          v-model="priority"
          true-value="yes"
        >
          High Priority
        </b-form-checkbox>
        <input id="subBtn" type="submit" value="Submit" class="btn" />
      </form>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import { FormDatepickerPlugin } from "bootstrap-vue";
import { FormInputPlugin } from "bootstrap-vue";
import { FormTimepickerPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";
import { db } from "@/main";

Vue.use(FormDatepickerPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormTimepickerPlugin);
Vue.use(ModalPlugin);

export default {
  name: "CreateTask",
  data() {
    return {
      title: "",
    };
  },

  //Sets currentuser value to the user email
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  //Sets intitial values
  mounted() {
    this.priority = false;
    console.log(this.priority);

    this.startTime = "00:00:00";
    this.endTime = "00:00:00";

    console.log(this.currentUser);
  },

  methods: {
    //Combines date and time values in order to work with API
    async addEvent() {
      if (this.start && this.endTime) {
        this.start = this.start.substring(0, 11) + "T" + this.startTime;
        this.endTime = this.start.substring(0, 11) + this.endTime;

        console.log("start is " + this.start);
        console.log("end is " + this.endTime);
      }

      //Checks priority -> changes colour based on value
      if (this.priority) {
        this.priority = "red";
      }

      //Submits values to database
      db.collection(firebase.auth().currentUser.email).add({
        title: this.title,
        start: this.start,
        end: this.endTime,
        description: this.description,
        backgroundColor: this.priority,
      });
    },
  },
};
</script>

<style scoped>
#subBtn {
  width: 40%;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
