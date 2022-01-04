<template>
    <div>
        <b-jumbotron class="background"
                     :style="styleObj"
                     :header="title"
                     :lead="lead">
            <p>{{ description }}</p>
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
    },
    computed: {
        styleObj() {
            return `background-image: url('${BASE_URL.IMAGE.ORIGINAL}/${this.src}')`;
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
}
</style>