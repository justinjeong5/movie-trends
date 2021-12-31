<template>
    <div>
        <div v-if="hasResult">
            <div v-for="(v, index) in movieList"
                 :key="index">
                <card :title="v.title"
                      :src="fakerImageUrl"
                      :description="v.overview"
                      buttonName="go"
                      variant="primary" />
            </div>
        </div>
        <div else>
            {{ "LOADING" }}
        </div>
    </div>
</template>

<script>
import store from "store";

import faker from "faker";

import card from "components/cards/card.vue";

export default {
    components: {
        card,
    },
    created() {
        store.dispatch("getMovieList");
    },
    computed: {
        hasResult() {
            return !!store.getters.movieList?.results?.length;
        },
        movieList() {
            return store.getters.movieList.results;
        },
        fakerImageUrl() {
            return faker.image.imageUrl();
        }
    },
};
</script>

<style lang="scss" scoped>
</style>