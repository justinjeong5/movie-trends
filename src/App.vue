<template>
    <router-view />
</template>

<script>
import router from "view/router";

export default {
    router,
    watch: {
        $route(route) {
            console.log(route);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none !important;
    text-align: center;
    color: #2c3e50;
}
</style>
