import store from "store";
import VueRouter from "vue-router";
import root from "view/movie/root.vue";
import details from "view/movie/details.vue"

const config = {
    routes: [
        {
            path: "/",
            name: "home",
            component: root,
            redirect: { name: "movie" },
            children: [
                {
                    path: "movies",
                    name: "movie",
                    component: root,
                    children: [
                        {
                            path: ":id",
                            name: "detail",
                            component: details,
                        }
                    ]
                },
            ]
        },
    ],
};
const router = new VueRouter(config);

router.onError((err) => {
    store.commit("setError", { data: { status: 404 } });
    throw err;
});

export default router; 