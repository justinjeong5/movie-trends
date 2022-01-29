import Movie from "model/movie";

export default {
    state: {
        movieList: [],
        page: 1,
    },
    getters: {
        movieList({ movieList }) {
            return movieList;
        },
    },
    mutations: {
        setMovieList(state, results) {
            state.movieList = [...state.movieList, ...results]
        },
        setNextPage(state, page) {
            state.page = page + 1;
        },
    },
    actions: {
        async getMovieList({ state, commit }) {
            try {
                const { page } = state;
                const { data } = await Movie.populars({ page });
                commit("setNextPage", data.page);
                commit("setMovieList", data.results);
            } catch (e) {
                console.error(e);
            }
        },
    },
};
