const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://localhost:1337",
      changeOrigin: true,
      pathRewrite: function(path,req){
        return "/api/v1/entrance/login";
      }
    })
 );

};