import { genSalt, genHash, compare } from "@server/util/util";
import { User } from "../model/user.model";

export const signup = async ctx => {
    const { email, password } = ctx.request.body;

    const isUnique = await User.unique({ email });
    if (!isUnique) {
        ctx.throw(400, "Email already exists");
    }

    try {
        const salt = genSalt();
        const hash = genHash(password, salt);

        await User.save({
            name: "new new",
            username: "newnew",
            email,
            password: hash,
            salt
        });
        ctx.body = {
            message: "success"
        };
        ctx.status = 201;
    } catch (error) {
        ctx.throw(500, error.message || "An error occured");
    }
};

export const login = async ctx => {
    const { email, password } = ctx.request.body;

    try {
        const user = await User.findByEmail(email);

        if (!user) {
            ctx.throw(500, "No user found");
        }

        const isMatch = compare(password, user.password, user.salt);

        if (isMatch) {
            ctx.status = 200;
            ctx.body = {
                message: "user is found",
                user: {
                    name: "Neil Berg"
                }
            };
        } else {
            ctx.throw(400, "Invalid password");
        }
    } catch (error) {
        ctx.throw(500, error.message || null);
    }
};
