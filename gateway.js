import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Proxy: frontend calls /hcgi/api/* -> internal API on :3001
app.use('/hcgi/api', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: { '^/hcgi/api': '' },
  on: {
    error: (err, req, res) => {
      res.writeHead(503, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'API is still starting up, please retry in a few seconds' }));
    },
  },
}));

// Proxy: frontend calls /hcgi/platform/* -> internal PocketBase on :8090
app.use('/hcgi/platform', createProxyMiddleware({
  target: 'http://localhost:8090',
  changeOrigin: true,
  pathRewrite: { '^/hcgi/platform': '' },
  on: {
    error: (err, req, res) => {
      res.writeHead(503, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Database is still starting up, please retry in a few seconds' }));
    },
  },
}));

// Serve the built frontend
const distDir = path.join(__dirname, 'dist', 'apps', 'web');
app.use(express.static(distDir));

// SPA fallback for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Gateway listening on :${port}`);
});
