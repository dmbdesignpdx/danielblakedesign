var path = require("path")

module.exports = {
   entry: {
      main: "./src/main.js"
   },
   output: {
      filename: "[name].min.js",
      path: path.join(__dirname, "static/dist")
   },
   module: {
      rules: [
         {
            test: /.js$/,
            exclude: /(node_modules)/,
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
