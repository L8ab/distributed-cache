const Redis = require('ioredis');

class DistributedCache {
  constructor(config) {
    this.redis = new Redis(config);
    this.localCache = new Map();
  }
  
  async get(key) {
    // Try local cache first
    if (this.localCache.has(key)) {
      return this.localCache.get(key);
    }
    
    // Try Redis
    const value = await this.redis.get(key);
    if (value) {
      this.localCache.set(key, JSON.parse(value));
      return JSON.parse(value);
    }
    
    return null;
  }
  
  async set(key, value, ttl = 3600) {
    // Set in local cache
    this.localCache.set(key, value);
    
    // Set in Redis
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
  
  async delete(key) {
    this.localCache.delete(key);
    await this.redis.del(key);
  }
  
  async clear() {
    this.localCache.clear();
    await this.redis.flushdb();
  }
}

module.exports = DistributedCache;
