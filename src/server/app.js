import path from 'path';
import express from 'express';

import { userRouter } from '@module/user/routes/user.routes';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

app.use(express.static(path.resolve('build')));
// If the route is not found by express then
// return index.html to manage the request in React
app.get('*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});
