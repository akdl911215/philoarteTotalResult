const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = (app) => { 
  app.use(
    createProxyMiddleware(
      '/api', 
      { target: "http://3.34.51.231/",
      changeOrigin: true }) 
      ); 
    };
// AWS.config.update({
//     accessKeyId: process.env.AKIAXKQOJEPQQDFFCREW,
//     secretAccessKey: process.env.ZdswSYiW9qnuy/dtCQtaoscnXYW5+BzKgPCjmMaq,
//     region: "an-northeast-2"
// })
