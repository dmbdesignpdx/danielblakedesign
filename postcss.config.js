module.exports = {
  plugins: [
    require("postcss-clean")({
      level: {
        2: {
          all: false,
          mergeMedia: true,
          removeEmpty: true,
        }
      }
    }),
  ],
}
