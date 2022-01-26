<template>
    <div>
        {{ "movie details!!!! movie details!!!!" }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 1,
        };
    },
    watch: {
        $route: {
            handler(route) {
                console.log("handler", route);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>