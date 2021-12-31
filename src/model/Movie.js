import { createAPIClient, withQS } from "lib/api";

const client = createAPIClient({});

class Movie {
    static list({ ...query }) {
        return client.get(withQS("popular", query));
    }
    static get(id, params = {}) {
        return client.get(`movie/${id}`, { params });
    }
}

export default Movie;
