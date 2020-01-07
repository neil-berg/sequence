import Router from 'koa-router';
import { auth } from '@server/middleware/auth';

import * as userHandlers from '../handlers/user.handlers';

export const userRouter = new Router({
    prefix: '/user'
});

userRouter.post('/signup', userHandlers.signupUser);
userRouter.post('/login', userHandlers.loginUser);
userRouter.post('/logout', auth, userHandlers.logoutUser);
userRouter.get('/me', auth, userHandlers.readUser);
userRouter.delete('/delete', auth, userHandlers.deleteUser);
userRouter.get('/hello', ctx => {
    ctx.body = {
        message: 'hello wirld'
    };
});
