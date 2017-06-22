'use strict';

require('./config');
const pjson = require('../package.json')
    , Koa        = require('koa')
    , Router = require('koa-router')
    , app = new Koa()
    , router = new Router()
    , GIT_COMMIT = process.env.GIT_COMMIT || 'no git commit'
    , NODE_ENV = process.env.NODE_ENV || 'no branch'
    ;


// app configuration
app.name = pjson.name

app.use(router.routes());

async function health(ctx, next) {
  ctx.body = {
    message: 'up',
    commit: GIT_COMMIT,
    branch: NODE_ENV
  };
  ctx.status = 200;
}

router.get('/health', health);

app.listen(8000);
