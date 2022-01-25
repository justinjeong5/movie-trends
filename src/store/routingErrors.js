import Vue from "vue";

export default {
    state: {
        error: null,
    },
    mutations: {
        setError(state, error) {
            Vue.set(state, "error", error);
        },
    },
    getters: {
        routingError(state) {
            return state.error;
        },
    },
};
