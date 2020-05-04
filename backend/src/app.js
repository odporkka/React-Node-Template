const Koa = require('koa');
const Router = require('koa-router');

const baseController = require('./controllers/baseController')

const app = new Koa();
const router = new Router()

/*
 * Error handling
 */
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = (ctx.status !== 500 && err.status) ? err.message : "Internal server error"
        ctx.app.emit('error', err, ctx);
    }
});
app.on('error', (err, ctx) => {
    /* centralized error handling:
     *   console.log error
     *   write error to log file
     *   save error and request information to database if ctx.request match condition
     *   ...
    */
});

/*
 * Routes
 */
router.get('/status', baseController.apiStatus);
router.get('/status3', async (ctx) => { ctx.body = "OK2"});
router.get('/error', async (ctx) => { throw new Error('Error!')});

app.use(router.routes());

module.exports = app;
