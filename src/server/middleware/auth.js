import { decodeToken } from '../auth/token';

export const auth = async (ctx, next) => {
    try {
        const token = ctx.req.headers.authorization.replace('Bearer ', '');
        const { exp } = decodeToken(token); // seconds since epoch
        const expDate = exp * 1000;
        if (Date.now() > expDate) {
            throw new Error();
        }
        ctx.status = 200;
        await next();
    } catch (error) {
        ctx.throw(401, 'Please authenticate');
    }
};
