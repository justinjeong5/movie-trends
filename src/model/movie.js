import { createAPIClient, withQS } from "lib/api";

const client = createAPIClient({});

class Movie {
    static populars({ ...query }) {
        return client.get(withQS("movies/populars", query));
    }
    static list() {
        return client.get("movies");
    }
    static get(id, params = {}) {
        return client.get(`movie/${id}`, { params });
    }
}

export default Movie;
