/* global Promise */
import Router from 'koa-router';
import { User } from '../module/user/model/user.model';

export const testRouter = new Router();

testRouter.get('/herokutest', ctx => {
    ctx.body = {
        message: 'success',
        data: {
            name: 'Neil',
            alive: 'yes'
        }
    };
    ctx.status = 200;
});

testRouter.get('/test/:id', async ctx => {
    console.log('params', ctx.params);
    ctx.body = {
        status: 'passing',
        message: 'test passes'
    };
    ctx.status = 202;
});

const p1 = new Promise((resolve, reject) => {
    resolve('okkkk');
});

const testHandler = async ctx => {
    const { user } = ctx.query;
    ctx.body = {
        message: 'coming from testHandler!',
        status: user === 'neil' ? 200 : 404
    };
    ctx.status = user === 'neil' ? 200 : 404;
    const data = await p1;
    console.log(data);
};

testRouter.get('/testtest', ctx => testHandler(ctx));

const auth = (ctx, next) => {
    if (ctx.query.user === 'neil') {
        ctx.status = 200;
        next();
    } else {
        ctx.status = 401;
        ctx.body = {
            message: 'Unauthorized'
        };
    }
};

const testService = {
    testMethod: async ctx => {
        const { id } = ctx.params;
        const data = await User.findById(id);
        console.log(data);
        ctx.body = {
            message: `Status: ${ctx.status}`
        };
        console.log(ctx.body);
    }
};

testRouter.get('/auth/:id', auth, testService.testMethod);
