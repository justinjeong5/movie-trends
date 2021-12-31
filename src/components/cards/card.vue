<template>
    <div>
        <b-card :title="title"
                :img-src="src"
                :img-alt="alt"
                img-top
                :tag="tag"
                style="max-width: 20rem;"
                class="mb-2">
            <b-card-text>
                {{ description }}
            </b-card-text>
            <b-button :href="to"
                      :variant="variant">
                {{ buttonName }}
            </b-button>
        </b-card>
    </div>
</template>

<script>
import OPTIONS from "lib/options";

const { VARIANT } = OPTIONS;

export default {
    props: {
        title: String,
        src: String,
        alt: {
            type: String,
            default: "Image",
        },
        tag: {
            type: String,
            default: "div",
        },
        description: String,
        to: String,
        buttonName: String,
        variant: {
            type: String,
            default: "primary",
            validator(v) {
                return VARIANT[v];
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>