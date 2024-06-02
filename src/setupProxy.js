const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'https://api.nextgen-creative.com/DVP',
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
