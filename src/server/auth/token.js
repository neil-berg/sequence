import jwt from 'jsonwebtoken';

// TODO: implement ENV variables for JWT secret
export const genToken = userId => {
    const token = jwt.sign({ _id: userId.toString() }, 'somesecret', {
        expiresIn: '1 day'
    });
    return token;
};

export const decodeToken = token => jwt.verify(token, 'somesecret');
