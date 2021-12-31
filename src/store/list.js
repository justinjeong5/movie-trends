import Movie from "model/movie";

export default {
    state: {
        list: {},
    },
    getters: {
        movieList(state) {
            return state.list;
        },
    },
    mutations: {
        setMovieList(state, list) {
            state.list = list;
        }
    },
    actions: {
        async getMovieList(context) {
            try {
                const res = await Movie.list();
                context.commit("setMovieList", res.data);
            } catch (e) {
                console.error(e);
            }
        },
    },
};
