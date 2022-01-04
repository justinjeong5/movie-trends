import { createAPIClient } from "lib/api";

const client = createAPIClient({});

class Poster {
    static get(id, params = {}) {
        return client.get(`poster/${id}`, { params });
    }
}

export default Poster;
