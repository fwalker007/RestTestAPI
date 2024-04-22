const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8011', // Replace with the target server URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // Rewrite URLs to remove '/api' prefix
      }
    })
  );
};