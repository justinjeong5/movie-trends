import axios from "axios"
import { API } from "../../env.js"

const createClient = (...args) => {
    const client = axios.create(...args);
    client.defaults.withCredentials = true;
    return client;
};

const createAPIClient = (config = {}, ...args) => {
    const baseURL = withAPI(config.baseURL);
    return createClient(
        {
            ...config,
            baseURL,
        },
        ...args
    );
};

const withAPI = (path = "") => API + path;

export {
    createAPIClient,
    createClient,
    withAPI,
};

export default createClient({ baseURL: API });
