import { createReducer } from '@reduxjs/toolkit';

export const userInitialState = {
    name: '',
    username: '',
    email: '',
    password: ''
};

export const setUser = user => ({
    type: 'user/add',
    user
});

export const setEmail = email => (dispatch, getState) => {
    const { _id } = getState().user;
    const newEmail = _id === 100 ? 'betty@demo.com' : email;
    dispatch({
        type: 'user/setEmail',
        email: newEmail
    });
};

export const userReducer = createReducer(userInitialState, {
    'user/add': (state, action) => ({ ...state, ...action.user }),
    'user/setEmail': (state, action) => ({ ...state, email: action.email })
});
