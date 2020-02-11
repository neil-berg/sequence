import { User } from '../model/user.model';
import { Token } from '@module/token/model/token.model';
import { genSalt, genHash } from '@server/auth/password';
import { genToken } from '../../../auth/token';
import { omitSensitiveData } from '@server/util';

export const signupUser = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const emailCount = await User.count({ email });
        const usernameCount = await User.count({ username });

        if (emailCount > 0) {
            throw new Error('Email already exists');
        }
        if (usernameCount > 0) {
            throw new Error('Username already exists');
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
        res.status(200).send({ user: omitSensitiveData(user), token });
    } catch (error) {
        res.status(400).send({ error });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        const token = genToken(user._id);
        await Token.save({ userId: user._id, token });
        res.status(200).send({ user: omitSensitiveData(user), token });
    } catch (error) {
        res.status(400).send();
    }
};

export const logoutUser = async (req, res) => {
    try {
        await Token.delete({ userId: req.user._id, token: req.token });
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(500).send();
    }
};

export const readUser = async (req, res) => {
    try {
        res.status(200).send({ user: omitSensitiveData(req.user) });
    } catch (error) {
        res.status(500).send();
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { _id } = req.user;
        await Token.delete({ userId: _id });
        await User.delete({ _id });
        res.status(200).send({ message: 'success' });
    } catch (error) {
        res.status(500).send({ message: 'unable to delete user' });
    }
};
