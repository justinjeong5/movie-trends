<template>
    <div>
        <movie-header title="Movie Trends"
                      lead="World leading movie trending" />
        <div v-if="hasResult">
            <b-container>
                <b-row :style="styleObj">
                    <div v-for="(v, index) in movieList"
                         :key="index">
                        <card :title="v.title"
                              :description="v.overview"
                              buttonName="go" />
                    </div>
                </b-row>
            </b-container>
        </div>
        <div v-else
             class="loading">
            <b-spinner label="Spinning"></b-spinner>
        </div>
    </div>
</template>

<script>
import store from "store";
import throttle from "lib/throttle";
import CONSTANTS from "lib/constants";

import card from "components/listing/card.vue";
import header from "components/layout/header.vue";

const { TIME_THROTTLE, INFINITY_SCROLL_HEIGHT } = CONSTANTS;

export default {
    components: {
        card,
        movieHeader: header,
    },
    created() {
        store.dispatch("getPopularList");
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    computed: {
        movieList() {
            return store.getters.popularList;
        },
        hasResult() {
            return !!this.movieList?.length;
        },
        styleObj() {
            return {
                display: "flex",
                justifyContent: "center",
            };
        },
    },
    methods: {
        handleLoad() {
            store.dispatch("getPopularList");
        },
        handleScroll() {
            const loadMore =
                window.scrollY + window.innerHeight + INFINITY_SCROLL_HEIGHT >=
                document.documentElement.scrollHeight;
            if (!loadMore) return;
            throttle(this.handleLoad, TIME_THROTTLE);
        },
    },
};
</script>

<style lang="scss" scoped>
.loading {
    height: calc(80vh - 400px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>