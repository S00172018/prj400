<template>
    <div>
        <form @submit="addEvent">
            <input type=text name="title" v-model="title" placeholder="Create Task" class="textbox">
                <b-form-datepicker id="example-datepicker" v-model="start" class="mb-2"></b-form-datepicker>
                    <p>High Priority</p>
                    <input type="checkbox" name="priority" v-model="toggle" true-value="yes">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import Vue from "vue";
import { FormDatepickerPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { db } from "@/main"

Vue.use(FormDatepickerPlugin)

export default {
    name: "CreateTask",
    data() {
        return {
        title: ''
        }
    },
    methods: {
         async addEvent () {
      if (this.title && this.start) {
        await db.collection("task list").add({
          title: this.title,
          start: this.start,
        })
      }
         }
    }
}
</script>

<style scoped>
* {
    display: inline-block;
}


</style>