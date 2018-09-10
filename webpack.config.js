var
path = require("path")

module.exports = {
   mode: "production",
   entry: {
      main: "./src/main.js"
   },
   output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "dist")
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
