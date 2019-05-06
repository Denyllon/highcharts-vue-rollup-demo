// rollup.config.js

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

const config = {
    input: "index.js",
    output: {
        name: "myBundle",
        file: 'bundle.js'
    },
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs({
            namedExports: {
                'node_modules/highcharts-vue/dist/module/highcharts-vue.min.js': ['Chart'],
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
    ]
};

export default config