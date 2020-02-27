import { createReducer } from '@reduxjs/toolkit';

export const modalInitialState = {
    authModal: {
        open: false
    },
    profileModal: {
        open: false
    }
};

export const modalReducer = createReducer(modalInitialState, {
    'modal/open': (state, action) => ({
        ...state,
        [action.key]: { ...state[action.key], open: true }
    }),
    'modal/close': (state, action) => ({
        ...state,
        [action.key]: { ...state[action.key], open: false }
    })
});
