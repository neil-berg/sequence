import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import { testRouter } from "./routes/index";
import { userRouter } from "./module/user/routes/user.routes";

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(cors());

// app.use(testRouter.routes());
// app.use(testRouter.allowedMethods());

app.on("error", (err, ctx) => {
    console.log("An error occured:", err.message);
    // console.log("ctx", ctx);
});

// Error handling
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx);
    }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

export const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
