import { createAPIClient, withQS } from "lib/api";

const client = createAPIClient({});

class Movie {
    static getPopular({ ...query }) {
        return client.get(withQS("movies/populars", { ...query }));
    }
    static list(params = {}) {
        return client.get("movies", { params });
    }
    static get(id, params = {}) {
        return client.get(`movie/${id}`, { params });
    }
}

export default Movie;
