'use strict';
const CURRENT_ENV = process.env.NODE_ENV || 'development';
import { name as _name } from '../../../package.json';
import { createLogger, stdSerializers } from 'bunyan';
let logLevel = 'debug';


if (CURRENT_ENV === 'master') {
  logLevel = 'debug';
} else if (CURRENT_ENV === 'staging') {
  logLevel = 'debug';
} else if (CURRENT_ENV === 'test') {
  logLevel = 'fatal';
}

export default createLogger({
  name: `<%your project name%>${CURRENT_ENV}-${_name}`,
  serializers: stdSerializers,
  src: true,
  streams: [
    {
      stream: process.stdout,
      level: logLevel
    }
  ]
});
