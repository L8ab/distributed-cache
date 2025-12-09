# Distributed Cache

A distributed caching system with Redis and local cache fallback.

## Features

- Redis integration
- Local cache fallback
- TTL support
- RESTful API
- High performance

## Tech Stack

- **Backend**: Node.js, Express
- **Cache**: Redis (ioredis)
- **Storage**: In-memory Map

## Project Structure

\`\`\`
distributed-cache/
├── src/
│   ├── cache.js         # Cache implementation
│   ├── utils/           # Cache key utilities
│   └── server.js        # API server
└── package.json
\`\`\`

## Installation

\`\`\`bash
npm install
\`\`\`

## Configuration

\`\`\`
REDIS_HOST=localhost
REDIS_PORT=6379
\`\`\`

## API Endpoints

- \`GET /cache/:key\` - Get cached value
- \`POST /cache/:key\` - Set cached value
- \`DELETE /cache/:key\` - Delete cached value

---

**POWERED BY L8AB SYSTEMS**
