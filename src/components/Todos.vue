<template>
    <div>
        <h1>Task Manager</h1>
        <div class="listy" v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:delete-item="$emit('delete-item', todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './Item.vue';

export default {
    name:"Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>


</style>