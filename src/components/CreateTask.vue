<template>
    <div>
        <b-button v-b-modal.modal-1>Create Task</b-button>
        <b-modal id="modal-1" title="Create Task" ok-only hide-footer="true">
  
        <form @submit="addEvent">
            <label for="titleBox">Title and Date (Required)</label>
            <b-form-input id="titleBox" type=text name="title" v-model="title" placeholder="Create Task" class="textbox"></b-form-input>
                <b-form-datepicker id="example-datepicker" v-model="start" class="mb-2"></b-form-datepicker>   
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col>
                                <label for="timePickerStart">Start</label>
                                <b-form-timepicker class="timePick" id="timePickerStart" v-model="startTime" locale="en"></b-form-timepicker> 
                            </b-col>
                            <b-col>
                                <label for="timePickerEnd">End</label>
                                <b-form-timepicker class="timePick" id="timePickerEnd" v-model="endTime" locale="en"></b-form-timepicker>  
                            </b-col>
                        </b-row>
                    </b-container>
                <b-form-checkbox class="pri" size="lg" type="checkbox" name="priority" v-model="priority" true-value="yes">
                    High Priority
                </b-form-checkbox>
            <input id="subBtn" type="submit" value="Submit" class="btn">
        </form>
        </b-modal>
    </div>
</template>

<script>
import Vue from "vue";
import { FormDatepickerPlugin } from 'bootstrap-vue'
import { FormInputPlugin } from 'bootstrap-vue'
import { FormTimepickerPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { db } from "@/main"

Vue.use(FormDatepickerPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormTimepickerPlugin)
Vue.use(ModalPlugin)

export default {
    name: "CreateTask",
    data() {
        return {
        title: ''
        }
    },

mounted() {
  this.priority = false;
  console.log(this.priority)
},

    methods: {
         async addEvent () {
      if (this.title && this.start) {
          if (this.startTime && this.endTime)
          {
              console.log("THIS IS THE TIME" + this.startTime)

              this.start = this.start.substring(0,11) + "T" + this.startTime
              this.endTime = this.start.substring(0,11) + this.endTime
              
          }
          if (this.priority) {
              this.priority = "red"
          }
        await db.collection("task list").add({
          title: this.title,
          start: this.start,
          end: this.endTime,
          backgroundColor: this.priority
        })
      }
         }
    }
}
</script>

<style scoped>

#subBtn {
    width: 40%;
margin-left: 30%;
margin-right: 30%
}



</style>