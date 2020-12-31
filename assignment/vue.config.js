module.exports = {
  // options...
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === "production" ? "/TGC9-FrontEnd-Assignment2/" : "/"
};