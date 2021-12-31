const VERSION = require("./package.json").version;

const {
    API,
    PROXY,
} = process.env;

const KEY = API || "DEV";
const APIS = {
    LOCAL: "http://localhost:8080",
    DEV: "http://15.164.89.17:8080",
    PROD: "http://15.164.89.17:8080",
};

const ENV_API = APIS[KEY] || KEY;

console.log(`App Version: ${VERSION}`);
console.log(`Binding to API: ${KEY} ${ENV_API}`);

const env = {
    VERSION,
    ENV: KEY,
    API: ENV_API,
    PROXY,
};

module.exports = env;
