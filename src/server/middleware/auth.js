import { decodeToken } from '../auth/token';
import { User } from '@module/user/model/user.model';
import { Token } from '../module/token/model/token.model';

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
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
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};
