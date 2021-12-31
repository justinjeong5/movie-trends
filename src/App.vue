<template>
    <div id="app">
        <popular />
    </div>
</template>

<script>
import popular from "modules/popular/root.vue";
import logo from "assets/logo.png";

export default {
    name: "App",
    components: {
        popular,
    },
    data() {
        return {
            logo,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
