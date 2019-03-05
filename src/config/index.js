import logger from '../lib/services/logger';

let env;

env =
  process.env.NODE_ENV == 'test' || !process.env.NODE_ENV
    ? 'development'
    : process.env.NODE_ENV;

logger.info(`loading configuration fot ${env} environment`);

const config = require('simpler-config').load(
  {
    development: require('./development'),
    staging: require('./staging'),
    production: require('./master')
  }[env]
);

export default config;
