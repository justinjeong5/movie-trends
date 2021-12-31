<template>
    <div>
        <div v-if="hasResult">
            <b-container>
                <b-row :style="styleObj">
                    <div v-for="(v, index) in movieList"
                         :key="index">
                        <card :title="v.title"
                              :src="fakerImageUrl"
                              :description="v.overview"
                              buttonName="go" />
                    </div>
                </b-row>
            </b-container>
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
        },
        styleObj() {
            return {
                display: "flex",
                justifyContent: "center"
            };
        },
    },
};
</script>

<style lang="scss" scoped>
</style>