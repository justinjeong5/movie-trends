import Vue from "vue";
import Vuex from "vuex";

import popularList from "./popularList";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        popularList,
    },
});
