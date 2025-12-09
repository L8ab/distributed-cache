const express = require('express');
const DistributedCache = require('./cache');

const app = express();
const cache = new DistributedCache({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379
});

app.use(express.json());

app.get('/cache/:key', async (req, res) => {
  const value = await cache.get(req.params.key);
  res.json({ key: req.params.key, value });
});

app.post('/cache/:key', async (req, res) => {
  await cache.set(req.params.key, req.body.value, req.body.ttl);
  res.json({ success: true });
});

app.delete('/cache/:key', async (req, res) => {
  await cache.delete(req.params.key);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Cache server running on port 3000');
});
