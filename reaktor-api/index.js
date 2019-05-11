'use strict';
const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

router.get('koala', '/', (ctx) => {
  ctx.body = "First koala on jees"
})

app.use(router.routes())
  .use(router.allowedMethods())


app.listen(8080, () => console.log('running on port 8080'))
