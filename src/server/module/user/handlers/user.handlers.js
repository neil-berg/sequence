import { User } from '../model/user.model';
import { Token } from '@module/token/model/token.model';
import { genSalt, genHash, comparePassword } from '@server/auth/password';
import { genToken } from '../../../auth/token';

export const signupUser = async ctx => {
    try {
        const { name, username, email, password } = ctx.request.body;
        const emailCount = await User.count({ email });
        const usernameCount = await User.count({ username });

        if (emailCount > 0) {
            const error = new Error('Email already exists');
            error.status = 400;
            throw error;
        }
        if (usernameCount > 0) {
            const error = new Error('Username already exists');
            error.status = 400;
            throw error;
        }

        const salt = genSalt();
        const hash = await genHash(password, salt);
        const user = await User.save({
            name,
            username,
            email,
            password: hash,
            salt
        });
        const newToken = genToken(user._id);
        const token = await Token.save({ userId: user._id, token: newToken });
        ctx.body = {
            message: 'success',
            user,
            token
        };
        ctx.status = 201;
    } catch (error) {
        ctx.throw(error.status || 500, error.message || 'An error occured');
    }
};

export const loginUser = async ctx => {
    const { email, password } = ctx.request.body;

    try {
        const user = await User.findByEmail(email);

        if (!user) {
            ctx.throw(500, 'No user found');
        }

        const isMatch = comparePassword(password, user.password, user.salt);

        if (isMatch) {
            ctx.status = 200;
            ctx.body = {
                message: 'user is found',
                user: {
                    name: 'Neil Berg'
                }
            };
        } else {
            ctx.throw(400, 'Invalid password');
        }
    } catch (error) {
        ctx.throw(500, error.message || null);
    }
};
