import Router from "koa-router";

import * as userHandlers from "../handlers/user.handlers";

export const userRouter = new Router({
    prefix: "/user"
});

userRouter.post("/signup", userHandlers.signup);
userRouter.post("/login", userHandlers.login);
userRouter.get("/test", async ctx => {
    const user = null;

    if (!user) {
        ctx.throw(413, "No user found");
    }

    ctx.status = 200;
    ctx.body = {
        status: "success",
        message: "test passes"
    };
});
