<template>
    <div class="task" v-bind:class="{'task-complete':todo.completed,
    'task-priority':todo.highPriority, 'selected':todo.selected}">
   <p id="text"> 
       <input type="checkbox" v-on:change="selected">      
        {{todo.title}}
        <button @click="$emit('delete-item', todo.id)" class="delete">Delete</button>
  </p>
    </div>
</template>

<script>
export default {
    name:"TodoItem",
    props:["todo"],
    methods: {
        selected() {
            this.todo.selected = !this.todo.selected;
        }
    }
}
</script>

<style scoped>
.task {
    background: rgb(40, 194, 40);
    padding: 10px;
    border-bottom: 1px;
    width: 700px;
    height: 50px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 20px;

}
.task-complete {
    text-decoration: line-through;
}
.task-priority {
    background: orange;   
}
.selected {
    background: lightgray; 
}
.delete {
    background: red;;
    color: white; 
    border: none;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
}
input[type=checkbox] {
    transform: scale(1.5);
}
#text {
    padding: 0px;
}
</style>