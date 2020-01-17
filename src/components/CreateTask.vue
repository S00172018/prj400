<template>
    <div>
        <form @submit="createTask">
            <input type=text name="title" v-model="title" placeholder="Create Task" class="textbox">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: "CreateTask",
    data() {
        return {
        title: ''
        }
    },
    methods: {
        createTask(e) {
            e.preventDefault();
            const newTask = {
                id: uuid.v4(),
                title: this.title,
                selected: false,
                highPriority: false,
                completed: false
            }
            //
            this.$emit('create-task', newTask);
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding: 5px;
}
input[type="submit"] {
    flex: 1;
}
div {
    width: 500px;
   padding-top: 50px;
}
</style>