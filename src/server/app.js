import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import path from 'path';
import fs from 'fs';

import { userRouter } from '@module/user/routes/user.routes';

export const app = new Koa();

app.on('error', (err, ctx) => {
    console.log('An error occured:', err.message);
    // console.log("ctx", ctx);
});

app.use(bodyParser());
app.use(cors());

// Error handling
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.use(serve('build'));
// If the file is not found by koa
// intercept all request and return index.html
// this way you can manage the request in React
app.use((ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.readFileSync(path.join('build', 'index.html'));
});
