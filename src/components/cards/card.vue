<template>
    <div>
        <b-card :title="title"
                :img-src="src"
                :img-alt="alt"
                img-top
                :tag="tag"
                :class="classObj">
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

const { VARIANT, SIZE } = OPTIONS;

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