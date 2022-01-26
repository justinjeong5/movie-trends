<template>
    <div>
        {{ details }}
    </div>
</template>

<script>
export default {
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
</style>