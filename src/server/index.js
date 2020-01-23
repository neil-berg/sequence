import { app } from './app';

const PORT = process.env.PORT || 3000;

export const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
