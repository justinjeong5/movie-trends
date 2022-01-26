const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");
const jsconfig = require("./jsconfig.json");

const env = require("./env");

const getDevtool = () => {
    if (env.PROD) {
        return false;
    }
    if (env.WEBPACK_DEVTOOL !== undefined) {
        return env.WEBPACK_DEVTOOL;
    }

    return "inline-cheap-module-source-map";
};

const config = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, "dist"),
    },
    devtool: getDevtool(),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {
                            hotReload: false,
                            extractCSS: true,
                            loaders: {
                                scss: `vue-style-loader!css-loader!sass-loader`,
                            },
                        },
                    }
                ],
            },
            {
                test: /\.s?css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            process: { env: JSON.stringify(env) },
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        })
    ],
    resolve: {
        alias: Object.keys(jsconfig.compilerOptions.paths).reduce(
            (a, k) => {
                const p = jsconfig.compilerOptions.paths[k][0];
                const modulePath = p.replace(/\/\*/, "");
                const name = modulePath.replace(/\.\/src\//, "");
                const splitPath = modulePath.split("/");
                splitPath[0] = __dirname;
                a[name] = path.resolve.apply(path.resolve, splitPath);
                return a;
            },
            {}
        ),
    },
    devServer: {
        port: env.PORT || 9000,
        proxy: {
            "/api": {
                target: env.API,
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
};

module.exports = config;
