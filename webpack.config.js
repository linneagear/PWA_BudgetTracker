const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

// add entry points for the js files
const config = {
    entry: "./public/assets/js/index.js",
    output: {
        path: __dirname + "/public/dist",
        // name of generated manifest file
        filename: "bundle.js"
    },
    mode: "production",
    plugins: [
        // add our webpack manifest plugin
        new WebpackPwaManifest({
            // set fingerprints to `false` to make the names of the generated
            // files predictable making it easier to refer to them in our code
            fingerprints: false,
            // we aren't using webpack to generate our html so we set inject to false
            inject: false,

            name: "Budget Tracker",
            short_name: "Budget Tracker",
            description: "An application for tracking budgets",
            background_color: "#01579b",
            theme_color: "#ffffff",
            "theme-color": "#ffffff",
            start_url: "/",
            icons: [
                {
                    src: path.resolve("public/assets/icons/icon-192x192.png"),
                    sizes: [192, 512],
                    destination: path.join("assets", "icons")
                  }
            ]
        })
    ],
    // configure webpack to use babel-loader to bundle our separate modules and transpile the code
    module: {
        rules: [
          {
            test: /\.js$/, // files must end in ".js" to be transpiled
            exclude: /node_modules/, // don't transpile code from "node_modules"
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      }
}

module.exports = config;