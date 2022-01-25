<template>
    <error-view v-if="displayError"
                :error="bufferedError"
                :error-route="errorRoute" />
    <router-view v-else />
</template>

<script>
import store from "store";

import ErrorView from "view/errorView.vue";
import router from "view/router";

export default {
    router,
    components: {
        ErrorView,
    },
    data() {
        const bufferedError = store.getters.routingError;
        const errorRoute = bufferedError ? this.$route : null;
        return {
            bufferedError,
            errorRoute,
        };
    },
    computed: {
        displayError() {
            return !!this.bufferedError;
        },
    },
    watch: {
        error(newVal) {
            console.log(newVal);
            if (newVal && !this.bufferedError) {
                this.bufferedError = newVal;
                this.errorRoute = this.$route;
            }
        },
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
