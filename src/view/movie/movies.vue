<template>
    <div>
        <movie-header title="Movie Trends"
                      lead="World leading movie trending"
                      :src="mainImage" />
        <div v-if="hasResult">
            <b-container>
                <b-row :style="styleObj">
                    <router-link v-for="(v, index) in movieList"
                                 :key="index"
                                 :to="{ name: 'detail', params: { id: v.id }}"
                                 class="router-link">
                        <card :title="v.title"
                              :description="v.overview"
                              :src="v.poster_path" />
                    </router-link>
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
import throttle from "lib/throttle";
import CONSTANTS from "lib/constants";

import card from "components/listing/card.vue";
import header from "components/structure/header.vue";

const { TIME_THROTTLE, INFINITY_SCROLL_HEIGHT } = CONSTANTS;

export default {
    components: {
        card,
        movieHeader: header,
    },
    created() {
        this.$store.dispatch("getMovieList");
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    computed: {
        movieList() {
            return this.$store.getters.movieList;
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
        mainImage() {
            return this.movieList.length
                ? this.movieList[0].backdrop_path
                : null;
        },
    },
    methods: {
        handleLoad() {
            this.$store.dispatch("getMovieList");
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

.router-link {
    text-decoration: none;
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