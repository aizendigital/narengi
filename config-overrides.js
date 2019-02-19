const path = require("path");
const { paths } = require("react-app-rewired");
const { injectBabelPlugin } = require("react-app-rewired");
const rewireAliases = require("react-app-rewire-aliases");
const fs = require("fs");
const lessToJs = require("less-vars-to-js");
const rewireSvgReactLoader = require("react-app-rewire-svg-react-loader");

const themeVariables = lessToJs(
    fs.readFileSync(path.join(__dirname, "./src/theme/antd.less"), "utf8")
);
module.exports = function override(config, env) {
    const rewireLess = require("react-app-rewire-less");
    config = rewireLess(config, env);
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: themeVariables,
    })(config, env);
    config = rewireSvgReactLoader(config, env);
    config = rewireAliases.aliasesOptions({
        components: path.resolve(__dirname, `${paths.appSrc}/components/`),
        containers: path.resolve(__dirname, `${paths.appSrc}/containers/`),
        languageProvider: path.resolve(
            __dirname,
            `${paths.appSrc}/languageProvider/`
        ),
        pages: path.resolve(__dirname, `${paths.appSrc}/pages/`),
        layouts: path.resolve(__dirname, `${paths.appSrc}/layouts/`),
        icons: path.resolve(__dirname, `${paths.appSrc}/icons/`),
        utils: path.resolve(__dirname, `${paths.appSrc}/utils/`),
        theme: path.resolve(__dirname, `${paths.appSrc}/theme/`),
        HOC: path.resolve(__dirname, `${paths.appSrc}/HOC/`),
        src: path.resolve(__dirname, `${paths.appSrc}/`),
    })(config, env);
    config = injectBabelPlugin(
        [
            "import",
            { libraryName: "antd", libraryDirectory: "es", style: true },
        ],
        config
    );
    return config;
};
