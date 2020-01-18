<template>
  <div id="Home">
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
          title: 'item 1',
          completed: false,
          highPriority: true,
          selected: false
        },
        {
          id: 2,
          title: 'item 2',
          completed: true,
          highPriority: false,
          selected: false
        },
        {
          id: 3,
          title: 'item 3',
          completed: false,
          highPriority: false,
          selected: false
        },
        {
          id: 4,
          title: 'item 4',
          completed: false,
          highPriority: true,
          selected: false
        },
        {
          id: 5,
          title: 'item 5',
          completed: true,
          highPriority: false,
          selected: false
        },
        {
          id: 6,
          title: 'item 6',
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
