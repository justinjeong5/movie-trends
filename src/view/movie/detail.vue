<template>
    <div>
        <detailed-header :src="details.backdrop_path"
                         :to="{ name: 'home' }"
                         :blur="true">
            <div class="detail--wrapper">
                <section class="detail--header">
                    <image-block class="detail--image"
                                 :src="details.poster_path"
                                 :height="350"
                                 :width="250" />
                    <div class="detail--content">
                        <div class="detail--title">
                            <span>{{ details.title }}</span>
                            <span class="detail--year">{{ releasedYear }}</span>
                        </div>
                        <div class="detail--text">
                            <span>{{ released }}</span>
                            <b-icon icon="dot" />
                            <span>{{ genres }}</span>
                            <b-icon icon="dot" />
                            <span>{{ runtime }}</span>
                        </div>
                        <div class="detail--tagline">
                            {{ details.tagline }}
                        </div>
                        <h3>overview</h3>
                        <div class="detail--text">
                            {{ details.overview }}
                        </div>
                    </div>
                </section>
            </div>
        </detailed-header>
    </div>
</template>

<script>
import { format, getYear } from "date-fns";

import header from "components/structure/header.vue";
import imageBlock from "components/images/imageBlock.vue";

export default {
    components: {
        detailedHeader: header,
        imageBlock,
    },
    data() {
        return {
            id: 1,
        };
    },
    async mounted() {
        await this.fetchDetails();
    },
    computed: {
        details() {
            return this.$store.getters.movieDetails;
        },
        releasedYear() {
            return `(${getYear(new Date(this.details.release_date))})`;
        },
        released() {
            return format(new Date(this.details.release_date), "yyyy/MM/dd");
        },
        genres() {
            return this.details.genres.map(({ name }) => name).join(", ");
        },
        runtime() {
            const { runtime } = this.details;
            if (runtime < 60) {
                return `${runtime}m`;
            }
            return `${parseInt(runtime / 60)}h ${runtime % 60}m`;
        },
    },
    methods: {
        async fetchDetails() {
            const { params } = this.$route;
            try {
                await this.$store.dispatch("getMovieDetails", params.id);
            } catch (err) {
                console.error(err);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
h3 {
    color: white;
}
.detail {
    &--wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    &--header {
        display: flex;
        flex-wrap: nowrap;
    }
    &--content {
        margin-left: 3rem;
        max-width: 876px;
    }
    &--title {
        font-size: 2.2rem;
        font-weight: 700;
        color: white;
    }
    &--year {
        opacity: 0.8;
        font-weight: 400;
    }
    &--text {
        font-size: 1em;
        color: white;
    }
    &--tagline {
        margin: 0.5rem 0;
        font-size: 1.1em;
        font-weight: 400;
        font-style: italic;
        opacity: 0.7;
        color: white;
    }
}
</style>