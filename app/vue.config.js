module.exports = {
  chainWebpack(config) {
    config.output
      .library("aaaa")
      .libraryTarget("umd")
      .jsonpFunction(`webpackJsonp_aaaa`);
  },
  devServer: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    disableHostCheck: true
  },
};
