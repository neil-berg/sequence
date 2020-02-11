import express from 'express';

import { auth } from '@server/middleware/auth';
import * as userHandlers from '../handlers/user.handlers';

export const userRouter = express.Router();

userRouter.post('/api/v1/user/signup', userHandlers.signupUser);
userRouter.post('/api/v1/user/login', userHandlers.loginUser);
userRouter.post('/api/v1/user/logout', auth, userHandlers.logoutUser);
userRouter.get('/api/v1/user/me', auth, userHandlers.readUser);
userRouter.delete('/api/v1/user/delete', auth, userHandlers.deleteUser);
