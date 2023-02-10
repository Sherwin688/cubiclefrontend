const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/loginUser",
    createProxyMiddleware({
      target: "https://cubical-backend-server.onrender.com",
      changeOrigin: true,
      pathRewrite: function(path,req){
        return "/api/v1/entrance/login";
      }
    })
 );
 app.use(
  "/getCubicleList",
  createProxyMiddleware({
    target: "https://cubical-backend-server.onrender.com",
    changeOrigin: true,
    pathRewrite: function(path,req){
      return "/api/v1/entrance/cubical";
    }
  })
);

};