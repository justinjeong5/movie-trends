import VueRouter from "vue-router";
import root from "./movie/root.vue";
import details from "./movie/details.vue"

const config = {
    routes: [
        {
            path: "/movie",
            name: "home",
            component: root,
            children: [
                { 
                    path: ":id",
                    name: "details",
                    component: details,
                },
            ]
        },
    ],
};
const router = new VueRouter(config);

export default router; 