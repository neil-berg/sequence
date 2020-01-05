import { User } from '../model/user.model';
import { Token } from '@module/token/model/token.model';
import { genSalt, genHash } from '@server/auth/password';
import { genToken } from '../../../auth/token';
import { omitSensitiveData } from '@server/util';

export const signupUser = async ctx => {
    try {
        const { name, username, email, password } = ctx.req.body;
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
        const token = genToken(user._id);
        await Token.save({ userId: user._id, token });
        ctx.body = {
            message: 'success',
            user: omitSensitiveData(user),
            token
        };
        ctx.status = 201;
    } catch (error) {
        ctx.throw(error.status || 500, error.message || 'An error occured');
    }
};

export const loginUser = async ctx => {
    try {
        const { email, password } = ctx.req.body;
        const user = await User.findByCredentials(email, password);
        const token = genToken(user._id);
        await Token.save({ userId: user._id, token });
        ctx.status = 200;
        ctx.body = {
            message: 'success',
            user: omitSensitiveData(user),
            token
        };
    } catch (error) {
        ctx.throw(error.status || 500, error.message || 'Unable to login');
    }
};

export const logoutUser = async ctx => {
    try {
        const { user, token } = ctx.body;
        await Token.delete({ userId: user._id, token });
        ctx.status = 200;
        ctx.body = {
            message: 'success'
        };
    } catch (error) {
        ctx.throw(error.status || 500, error.message || 'Unable to logout');
    }
};

export const readUser = async ctx => {
    try {
        ctx.body = {
            ...ctx.body,
            user: omitSensitiveData(ctx.body.user)
        };
        ctx.status = 200;
    } catch (error) {
        ctx.throw(error.status || 500, error.message || 'Unable to read user');
    }
};

export const deleteUser = async ctx => {
    try {
        const { _id } = ctx.body.user;
        await Token.delete({ userId: _id });
        await User.delete({ _id });
        ctx.body = {
            message: 'success'
        };
        ctx.status = 200;
    } catch (error) {
        ctx.throw(
            error.status || 500,
            error.message || 'Unable to delete user'
        );
    }
};
