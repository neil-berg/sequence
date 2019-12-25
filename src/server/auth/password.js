import crypto from "crypto";
import { promisify } from "util";

const pbkdf2 = promisify(crypto.pbkdf2);

export const genSalt = () => crypto.randomBytes(128).toString("base64");

export const genHash = async (password, salt) => {
    const iterations = 10000;
    const keyLen = 512;
    const digest = "sha256";
    const buffer = await pbkdf2(password, salt, iterations, keyLen, digest);
    return buffer.toString("base64");
};

export const comparePassword = (password, hash, salt) => {
    const hashed = genHash(password, salt);
    return hashed === hash;
};
