import VueRouter from "vue-router";
import store from "store";

import movieRoot from "view/movie/root.vue";
import movies from "view/movie/movies.vue";
import detail from "view/movie/detail.vue"

import contributors from "view/contributors/root.vue"

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            name: "home",
            redirect: { name: "movies" },
            component: movieRoot,
            children: [
                {
                    path: "movies",
                    name: "movies",
                    component: movies,
                },
                {
                    path: "movies/:id",
                    name: "detail",
                    component: detail,
                }
            ]
        },
        {
            path: "/contributors",
            name: "contributors",
            component: contributors,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        store.commit("setError", { data: { status: 404 } });
        next();
    } else {
        next();
        store.commit("setError", null);
    }
});

router.onError((err) => {
    console.error(err);
    store.commit("setError", { data: { status: 404 } });
    throw err;
});

export default router; 
