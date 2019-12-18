import Router from "koa-router";

export const userRouter = new Router({
    prefix: "/user"
});

userRouter.get("/login", async ctx => {
    console.log("params", ctx.params);
    ctx.body = {
        status: "passing",
        message: "test passes"
    };
    ctx.status = 202;
});
