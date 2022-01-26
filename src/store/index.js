import Vue from "vue";
import Vuex from "vuex";

import routingErrors from "./routingErrors";
import popularList from "./popularList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routingErrors,

        popularList,
    },
});
