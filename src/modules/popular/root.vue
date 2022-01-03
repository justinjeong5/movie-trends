<template>
    <div>
        {{ showList }}
    </div>
</template>

<script>
import store from "store";

export default {
    computed: {
        showList() {
            return store.getters.movieList?.results?.length
                ? store.getters.movieList.results
                : "No data to display";
        },
    },
};
</script>

<style lang="scss" scoped>
</style>