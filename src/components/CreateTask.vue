<template>
    <div>
        <form @submit="createTask">
            <input type=text name="title" v-model="title" placeholder="Create Task" class="textbox">
                <p>High Priority</p>
                <input type="checkbox" name="priority" v-model="toggle" true-value="yes">
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
                highPriority: this.toggle,
                completed: false
            }
            //
            this.$emit('create-task', newTask);
            this.title = '';
        }
    }
}
</script>

<style scoped>
p {
    padding-right: 5px;
}

form {
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding-left: 5px;
    padding-right: 5px;
}
input[type="submit"] {
    flex: 1;
}
input[type="checkbox"] {
    flex: 1;
    padding-right: 5px;
}
div {
    width: 500px;
   padding-top: 50px;
}
</style>