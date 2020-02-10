/* eslint-disable no-unused-vars */
import { createReducer } from '@reduxjs/toolkit';

export const userInitialState = {
    _id: null,
    name: '',
    username: '',
    email: '',
    created: null,
    updated: null
};

export const setUser = user => ({
    type: 'user/add',
    user
});

export const removeUser = () => ({
    type: 'user/remove'
});

export const userReducer = createReducer(userInitialState, {
    'user/add': (state, action) => ({ ...state, ...action.user }),
    'user/remove': (state, action) => ({ ...state, ...userInitialState })
});
