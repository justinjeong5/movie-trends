<template>
    <div class="block-container">
        <div class="image-block"
             :style="style"
             @click="toggleClick"/>
        <div v-if="isClicked && zoomable"
             class="zoom-container"
             :style="zoomStyle" />
    </div>
</template>

<script>
import CONSTANTS from "lib/constants";

const { BASE_URL } = CONSTANTS;

export default {
    props: {
        src: {
            type: String,
            default: "",
        },
        height: {
            type: Number,
        },
        width: {
            type: Number,
        },
        size: {
            type: Number,
            default: 32,
        },
        zoomable: {
            type: Boolean,
            default: true,
        },
        maxZoomSize: {
            type: Number,
            default: 400,
        },
        objectFit: {
            type: String,
            default: "cover",
        },
    },
    data() {
        return {
            isClicked: false,
            loadingImage: false,
            imageMeta: {},
        };
    },
    computed: {
        internalHeight() {
            const h = this.height || this.size;
            return `${h}px`;
        },
        internalWidth() {
            const w = this.width || this.size;
            return `${w}px`;
        },
        internalSrc(){
            return `${BASE_URL.IMAGE.W500}${this.src}`;
        },
        style() {
            return {
                "min-height": this.internalHeight,
                height: this.internalHeight,
                "min-width": this.internalWidth,
                width: this.internalWidth,
                "background-image": `url('${this.internalSrc}')`,
                "background-size": this.objectFit,
            };
        },
        zoomStyle() {
            let width, height;

            if (this.imageMeta.height < this.imageMeta.width) {
                width = this.maxZoomSize;
                height =
                    (this.maxZoomSize * this.imageMeta.height) /
                    this.imageMeta.width;
            } else {
                height = this.maxZoomSize;
                width =
                    (this.maxZoomSize * this.imageMeta.width) /
                    this.imageMeta.height;
            }

            return {
                left: this.internalWidth,
                height: height + "px",
                width: width + "px",
                "max-height": this.imageMeta.height + "px",
                "max-width": this.imageMeta.width + "px",
                "background-image": `url('${this.internalSrc}')`,
                "background-size": this.objectFit,
            };
        },
    },
    async mounted() {
        if (this.src) {
            this.imageMeta = await this.getImageMeta();
        }
    },
    methods: {
        async getImageMeta() {
            this.loadingImage = true;
            const img = new Image();
            img.src = this.internalSrc;

            await img.decode();
            this.loadingImage = false;
            return img;
        },

        toggleClick() {
            this.isClicked = !this.isClicked;
        },
    },
};
</script>

<style lang="scss" scoped>
.block-container {
    position: relative;
}
.image-block {
    border: solid 1px gray;
    background-position: center center;
    background-repeat: no-repeat;
}

.zoom-container {
    position: absolute;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    z-index: 100;
}
</style>
