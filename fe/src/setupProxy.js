const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = (app) => { 
  app.use(
    createProxyMiddleware(
      '/api', 
      { target: "http://3.34.51.231/",
      changeOrigin: true }) 
      ); 
    };

