<template>
    <div>
        <b-list-group class="listy" v-bind:key="task.id" v-for="task in tasks">
            <b-list-group-item variant="secondary" v-bind:tasks="task"> 
                {{task.title}}
                <b-badge variant="primary" pill>...</b-badge>
            </b-list-group-item> 
        </b-list-group>
    </div>
</template>

<script>
import Vue from "vue";
import { db } from "@/main"
import { ListGroupPlugin } from 'bootstrap-vue'
Vue.use(ListGroupPlugin)

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
     }
  }
}
</script>

<style scoped>

</style>