<template>
  <div class="container" align="center">
    <Todos v-bind:todos="todos" v-on:delete-item="deleteItem"/>
    <CreateTask v-on:create-task="createTask"/>
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
        {
          id: 0,
          title: 'Secure Software Assignment 2',
          completed: false,
          highPriority: true,
          selected: false
        },
        {
          id: 2,
          title: 'Maths Exam',
          completed: true,
          highPriority: false,
          selected: false
        },
        {
          id: 3,
          title: 'Web Development Quiz',
          completed: false,
          highPriority: false,
          selected: false
        },
        {
          id: 4,
          title: 'PRJ400 Meeting',
          completed: false,
          highPriority: true,
          selected: false
        },
        {
          id: 5,
          title: 'Physics Homework',
          completed: true,
          highPriority: false,
          selected: false
        },
        {
          id: 6,
          title: 'Software Testing CA 1',
          completed: false,
          highPriority: false,
          selected: false
        }
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  align-content: center;
}

h1 {
  font-weight: bolder;
  font: 100;
  padding: 5px;
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
