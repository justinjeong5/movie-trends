const VERSION = require("./package.json").version;
const env = {
    VERSION,
};

console.log(`App Version: ${VERSION}`);

module.exports = env