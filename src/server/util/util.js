import crypto from "crypto";

export const genSalt = () => crypto.randomBytes(128).toString("base64");

export const genHash = (password, salt) => {
    const iterations = 10000;
    const keyLen = 512;
    const digest = "sha256";
    const buffer = crypto.pbkdf2Sync(
        password,
        salt,
        iterations,
        keyLen,
        digest
    );
    return buffer.toString("base64");
};

export const compare = (password, hash, salt) => {
    const hashed = genHash(password, salt);
    return hashed === hash;
};
