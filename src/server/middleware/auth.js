import { decodeToken } from '../auth/token';
import { User } from '@module/user/model/user.model';
import { Token } from '../module/token/model/token.model';

export const auth = async (ctx, next) => {
    try {
        const token = ctx.request.headers.authorization.replace('Bearer ', '');
        const { _id, exp } = decodeToken(token);
        const expDate = exp * 1000;
        if (Date.now() > expDate) {
            throw new Error();
        }
        const user = await User.findById(_id);
        const tokenExists = await Token.findOne({ userId: user._id, token });
        if (!user || !tokenExists) {
            throw new Error();
        }
        ctx.state.user = user;
        ctx.state.token = token;
        await next();
    } catch (error) {
        ctx.throw(401, 'Please authenticate');
    }
};
