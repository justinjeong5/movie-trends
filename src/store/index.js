import Vue from "vue";
import Vuex from "vuex";

import routingErrors from "./routingErrors";
import movieList from "./movieList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routingErrors,

        movieList,
    },
});
