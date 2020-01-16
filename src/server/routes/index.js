import Router from 'koa-router';

import { userRouter } from '@module/user/routes/user.routes';

export const apiRouter = new Router({
    prefix: '/api/v1'
});

apiRouter.use(userRouter.routes()).use(userRouter.allowedMethods());
