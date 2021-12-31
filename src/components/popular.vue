<template>
    <div>
        {{ showList }}
    </div>
</template>

<script>
import API from "lib/api";

export default {
    data() {
        return {
            list: [],
        };
    },
    computed: {
        showList() {
            return this.list?.length ? this.list : "No data to display";
        },
    },
    mounted() {
        API.get("/api/popular/1")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    },
};
</script>

<style lang="scss" scoped>
</style>