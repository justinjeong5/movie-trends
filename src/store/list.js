import Movie from "model/movie";

export default {
    state: {
        list: [],
    },
    getters: {
        movieList() {
            return this.list;
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
                res.data.results
                context.commit("setMovieList", res.data.results);
                return res;
            } catch (e) {
                console.error(e);
            }
        },
    },
};
