import Movie from "model/movie";

export default {
    state: {
        popularList: [],
        page: 1,
    },
    getters: {
        popularList({ popularList }) {
            return popularList;
        },
    },
    mutations: {
        setPopularList(state, results) {
            state.popularList = [...state.popularList, ...results]
        },
        setNextPage(state, page) {
            state.page = page + 1;
        },
    },
    actions: {
        async getPopularList({ state, commit }) {
            try {
                const { page } = state;
                const { data } = await Movie.populars({ page });
                commit("setNextPage", data.page);
                commit("setPopularList", data.results);
            } catch (e) {
                console.error(e);
            }
        },
    },
};
