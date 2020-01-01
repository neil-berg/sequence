import Router from 'koa-router';
import { auth } from '@server/middleware/auth';

import * as userHandlers from '../handlers/user.handlers';

export const userRouter = new Router({
    prefix: '/user'
});

userRouter.post('/signup', userHandlers.signupUser);
userRouter.post('/login', auth, userHandlers.loginUser);
userRouter.post('/test', auth, async ctx => {
    console.log(ctx.body);
});
