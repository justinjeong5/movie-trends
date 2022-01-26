import Movie from "model/movie";

export default {
    state: {
        movieDetails: {},
    },
    getters: {
        movieDetails({ movieDetails }) {
            return movieDetails;
        },
    },
    mutations: {
        setMovieDetails(state, details) {
            state.movieDetails = details;
        },
    },
    actions: {
        async getMovieDetails({ commit }, id) {
            try {
                const { data } = await Movie.get(id);
                commit("setMovieDetails", data);
            } catch (e) {
                console.error(e);
            }
        },
    },
};
