<template>
    <div>
        <b-list-group class="listy" v-bind:key="task.id" v-for="task in tasks">
            <b-list-group-item v-bind:tasks="task" :variant=colour(task)> 
                {{task.title}} │ {{task.start.substring(0,10)}} 
                <b-badge variant="primary" pill>...</b-badge>
                <b-button class="float-right" pill variant="outline-danger" size="sm" v-on:click="deleteEvent(task.id)">Delete</b-button>
            </b-list-group-item> 
        </b-list-group>
    </div>
</template>

<script>
import Vue from "vue";
import { db } from "@/main"
import { ListGroupPlugin } from 'bootstrap-vue'
import moment from 'moment';
import { ButtonPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ListGroupPlugin)
Vue.use(moment);
Vue.use(ButtonPlugin)

export default {
  name: "Todos",

  data: () => ({  
      tasks: [],
  }),

  mounted() {
  this.getEvents();

  console.log(this.tasks)
},

  methods: {
      async getEvents () {
      let snapshot = await db.collection('task list').get()
      const tasks = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        tasks.push(appData)
        console.log(doc.id, " => ", doc.data());
      })
      this.tasks = tasks
     },

     async deleteEvent (event) {
      await db.collection("task list").doc(event).delete()
      this.getEvents()
    },

    colour(task) {

if (task.backgroundColor == "red") {

        return "danger"  
}   

else return "secondary"
    }
  }
}
</script>

<style scoped>
.task-priority {
    background: orange;   
}

</style>