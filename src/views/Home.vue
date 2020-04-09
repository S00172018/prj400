<template>
  <div class="container" align="center">
    <h1>Task Manager</h1>
    <CreateTask v-on:create-task="createTask"/>
    <h2>Events</h2>
    <Todos v-bind:todos="todos" v-on:delete-item="deleteItem"/>
  </div>
</template>

<script>
import Todos from '../components/Todos';
import CreateTask from '../components/CreateTask';

export default {
  name: 'Home',
  components: {
    Todos,
    CreateTask
  },
  data() {
    return {
      todos: [
       
      ]
    }
  },
  methods: {
    deleteItem(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    createTask(newTask) {
      this.todos = [...this.todos, newTask];
    }
  }
}
</script>

<style>


h1 {
  font-weight: bolder;
  font: 100;
}

h2 {
  font-weight: bolder;
  padding-top: 15px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  background: whitesmoke;
}

.btn {
  display: inline-block;
  border: none;
  background: grey;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: darkgray;
}

</style>
