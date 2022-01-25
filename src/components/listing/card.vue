<template>
    <div style="margin: 1rem">
        <b-card :title="title"
                :img-src="imageUrl"
                :img-alt="alt"
                img-top
                :tag="tag"
                :class="classObj">
            <b-card-text>
                {{ truncatedDescription }}
            </b-card-text>
            <b-button v-if="buttonName"
                      :href="to"
                      :variant="variant">
                {{ buttonName }}
            </b-button>
        </b-card>
    </div>
</template>

<script>
import truncate from "lib/truncate";
import OPTIONS from "lib/options";
import CONSTANTS from "lib/constants";

const { VARIANT, SIZE } = OPTIONS;
const { BASE_URL } = CONSTANTS;

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
        buttonName: {
            type: String,
            default: "",
        },
        variant: {
            type: String,
            default: "primary",
            validator(v) {
                return VARIANT[v];
            },
        },
        size: {
            type: String,
            default: "medium",
            validator(v) {
                return SIZE[v];
            },
        },
    },
    computed: {
        classObj() {
            const sizeClass = {
                small: "card__size-small",
                medium: "card__size-medium",
                large: "card__size-large",
            };
            return sizeClass[this.size];
        },
        truncatedDescription() {
            return truncate(this.description, 120, "...");
        },
        imageUrl() {
            return `${BASE_URL.IMAGE.W500}/${this.src}`;
        },
    },
};
</script>

<style lang="scss" scoped>
.card__size-small {
    max-width: 15rem;
}
.card__size-medium {
    max-width: 20rem;
}
.card__size-large {
    max-width: 25rem;
}
</style>