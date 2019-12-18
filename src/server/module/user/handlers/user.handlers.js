export const userHandlers = {
    login: async ctx => {
        ctx.body = {
            message: "coming from userHandlers.login"
        };
    }
};
