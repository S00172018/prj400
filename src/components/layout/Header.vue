<template>
    <header class="header">
        <h1>PRJ400 Productivity Application</h1>
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header {
    background: rgb(53, 124, 148);
    color: white;
    text-align: center;
    padding: 10px;
}

.header a {
    color: white;
    padding-right: 5px;
}
</style>