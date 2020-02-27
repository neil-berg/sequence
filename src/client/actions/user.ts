export const setUser = user => ({
    type: 'user/add',
    user
});

export const removeUser = () => ({
    type: 'user/remove'
});
