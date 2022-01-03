<template>
    <div>
        <b-jumbotron :header="title"
                     :lead="lead">
            <p>{{ description }}</p>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        lead: String,
        description: String,
    }
};
</script>

<style lang="scss" scoped>
</style>