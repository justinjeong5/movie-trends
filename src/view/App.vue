<template>
    <error-view v-if="displayError"
                :error="bufferedError"
                :error-route="errorRoute" />
    <router-view v-else />
</template>

<script>
import router from "./router";

import ErrorView from "view/errorView.vue";

export default {
    router,
    components: {
        ErrorView,
    },
    data() {
        const bufferedError = this.$store.getters.routingError;
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
            if (newVal && !this.bufferedError) {
                this.bufferedError = newVal;
                this.errorRoute = this.$route;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

a {
    text-decoration: none !important;
    cursor: pointer;
    color: #2c3e50;

    &:active,
    &:focus,
    &:hover {
        cursor: pointer;
        text-decoration: none;
    }
}
</style>
