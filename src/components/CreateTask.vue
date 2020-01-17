<template>
    <div>
        <form>
            <input type=text name="title" placeholder="Create Task" class="textbox">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "CreateTask"
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