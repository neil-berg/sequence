export const omitSensitiveData = user => {
    delete user.password;
    delete user.salt;
    return user;
};
