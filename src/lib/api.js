import axios from "axios";
import qs from "qs";
import { API } from "../../env.js";

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
const withQS = (path = "", { ...query } = {}) =>
    `${path}?${qs.stringify({ ...query })}`;

export {
    createAPIClient,
    createClient,
    withAPI,
    withQS,
};

export default createClient({ baseURL: API });
