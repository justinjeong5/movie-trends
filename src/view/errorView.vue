<template>
    <div>
        <div class="error-display">
            <h1 class="unhappy">
                :(
            </h1>
            <div class="details">
                <h2 class="title">
                    <span v-if="internalError.code">{{ internalError.code }} - </span>
                    {{ internalError.title }}
                </h2>
                <p>{{ internalError.desc }}</p>
                <p class="path">
                    {{ path }}
                </p>
                <a class="router-link-active"
                   :href="homeLink">{{ "ERROR.GO_BACK_HOME" }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import router from "./router";
import store from "store";

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        store.commit("setError", { data: { status: 404 } });
        next();
    } else {
        next();
        store.commit("setError", null);
    }
});

const codeCheck =
    (...codes) =>
    err => {
        if (!err || !err.data) {
            return;
        }
        const { status } = err.data;
        return codes.some(code => code === status);
    };

export default {
    props: {
        errorView: String,
    },
    computed: {
        path() {
            return this.errorRoute && this.errorRoute.fullPath;
        },
        internalError() {
            if (codeCheck(403, 404)(this.error)) {
                return {
                    code: 404,
                    title: "ERROR.PAGE_NOT_FOUND",
                    desc: "ERROR.PAGE_NOT_FOUND_DESC",
                };
            }
            if (codeCheck(500)(this.error)) {
                return {
                    code: 500,
                    title: "ERROR.INTERNAL_SERVER_ERROR",
                    desc: "ERROR.INTERNAL_SERVER_ERROR_DESC",
                };
            }
            if (codeCheck(400)(this.error)) {
                try {
                    const desc = JSON.parse(this.error.data.response).error;
                    if (this.desc !== desc) {
                        return {
                            code: 400,
                            title: "ERROR.CLIENT_REQUEST_ERROR",
                            desc,
                        };
                    }
                } catch (e) {
                    // Set as unknown error
                }
            }
            return {
                title: "ERROR.UNKNOWN_ERROR",
                desc: "ERROR.UNKNOWN_ERROR_DESC",
            };
        },
        homeLink() {
            return this.$router.resolve({ name: "home" }).href;
        },
    },
};
</script>

<style lang="scss" scoped>
.error-display {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 2em;
    align-items: center;
    justify-content: center;
}

.unhappy {
    color: red;
    font-size: 150px;
    white-space: nowrap;
}

.details {
    display: flex;
    flex-direction: column;
    margin-left: 2.5em;
    max-width: 500px;
}

.title {
    font-weight: 500;
    text-transform: uppercase;
}

.path {
    font-weight: bold;
    font-size: 0.7em;
}
</style>
