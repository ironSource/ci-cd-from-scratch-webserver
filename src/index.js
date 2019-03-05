'use strict';

import './config';
import { name } from '../package.json';
import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();
const router = new Router();
const GIT_COMMIT = process.env.GIT_COMMIT || 'no git commit';
const NODE_ENV = process.env.NODE_ENV || 'no branch';


// app configuration
app.name = name

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
