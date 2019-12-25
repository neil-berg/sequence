import { User } from "../model/user.model";
import { genSalt, genHash, comparePassword } from "@server/auth/password";
import { genToken } from "../../../auth/token";

export const signup = async ctx => {
    const { name, username, email, password } = ctx.request.body;
    const emailCount = await User.count({ email });
    const usernameCount = await User.count({ username });

    if (emailCount > 0) {
        ctx.throw(400, "Email already exists.");
    }
    if (usernameCount > 0) {
        ctx.throw(400, "Username already exists.");
    }

    try {
        const salt = genSalt();
        const hash = await genHash(password, salt);

        const _id = await User.save({
            name,
            username,
            email,
            password: hash,
            salt
        });

        const token = genToken(_id);

        const user = await User.update({ _id }, { token });
        console.log(user);

        ctx.body = {
            message: "success",
            data: {
                user
            }
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

        const isMatch = comparePassword(password, user.password, user.salt);

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
