<template>
    <div>
        <div v-if="hasResult">
            <div v-for="(v, index) in movieList"
                 class=""
                 :key="index">
                <item :value="v" />
            </div>
        </div>
        <div else>
            {{ "LOADING" }}
        </div>
    </div>
</template>

<script>
import store from "store";
import item from "./movie.vue";

export default {
    components: {
        item,
    },
    computed: {
        hasResult() {
            return !!store.getters.movieList?.results?.length;
        },
        movieList() {
            return store.getters.movieList.results;
        },
    },
    created() {
        store.dispatch("getMovieList");
    },
};
</script>

<style lang="scss" scoped>
</style>