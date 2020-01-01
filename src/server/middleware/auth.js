import { decodeToken } from '../auth/token';
import { User } from '@module/user/model/user.model';

const scrubSensitive = user => {
    delete user.password;
    delete user.salt;
    return user;
};

export const auth = async (ctx, next) => {
    try {
        const token = ctx.req.headers.authorization.replace('Bearer ', '');
        const { _id, exp } = decodeToken(token);
        const expDate = exp * 1000;
        if (Date.now() > expDate) {
            throw new Error();
        }
        const user = await User.findById(_id);
        ctx.body = {
            user: scrubSensitive(user)
        };
        ctx.status = 200;
        await next();
    } catch (error) {
        ctx.throw(401, 'Please authenticate');
    }
};
