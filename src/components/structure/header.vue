<template>
    <div>
        <b-jumbotron class="background"
                     :style="styleObj"
                     :header="title"
                     :lead="lead">
            <router-link v-if="routerAvailable"
                         :to="to">
                <b-icon class="route-icon"
                        font-scale="2"
                        icon="arrow-left-square-fill"
                        variant="white" />
            </router-link>
            <slot />
        </b-jumbotron>
    </div>
</template>

<script>
import CONSTANTS from "lib/constants";

const { BASE_URL } = CONSTANTS;

export default {
    props: {
        title: String,
        lead: String,
        description: String,
        src: String,
        to: Object,
        blur: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        routerAvailable() {
            return !!this.to;
        },
        styleObj() {
            const obj = {};
            if (this.src) {
                obj[
                    "background-image"
                ] = `url('${BASE_URL.IMAGE.ORIGINAL}/${this.src}')`;
            }
            if (this.blur) {
                obj[
                    "background-image"
                ] = `linear-gradient(to right, rgba(20.00%, 15.69%, 20.39%, 1.00) 150px, rgba(20.00%, 15.69%, 20.39%, 0.84) 100%), url('${BASE_URL.IMAGE.ORIGINAL}/${this.src}')`;
            }
            return obj;
        },
    },
};
</script>

<style lang="scss" scoped>
.background {
    background-size: cover;
    height: 30rem;
    text-align: left;

    .display-3 {
        font-weight: 500;
    }

    .route-icon {
        position: absolute;
        top: 50px;
        right: 50px;
    }
}
</style>