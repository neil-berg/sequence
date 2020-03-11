import { createReducer } from '@reduxjs/toolkit';
import { ModalActionTypes } from '../actions';

export const modalInitialState = {
    authModal: {
        open: false
    },
    profileModal: {
        open: false
    }
};

export const modalReducer = createReducer(modalInitialState, {
    'modal/open': (state, action: ModalActionTypes) => ({
        ...state,
        [action.key]: { ...state[action.key], open: true }
    }),
    'modal/close': (state, action: ModalActionTypes) => ({
        ...state,
        [action.key]: { ...state[action.key], open: false }
    })
});
