class CacheKeyGenerator {
  generate(namespace, ...parts) {
    return `${namespace}:${parts.join(':')}`;
  }
  
  parse(key) {
    const parts = key.split(':');
    return {
      namespace: parts[0],
      parts: parts.slice(1)
    };
  }
  
  validate(key) {
    return typeof key === 'string' && key.length > 0 && !key.includes(' ');
  }
}

module.exports = new CacheKeyGenerator();
