<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo"/>
        </div>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>


<script>
import TodoItem from './Item.vue';

export default {
    name:"Cards",
    components: {
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>

</style>