<template>
    <div>
        <img alt="poster image"
             :src="poster" />
        <div>{{ title }}</div>
        <div>{{ overview }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: Object,
    },
    computed: {
        poster() {
            return this.value && this.value.poster_path;
        },
        overview() {
            return this.value && this.value.overview;
        },
        title() {
            return this.value && this.value.title;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>