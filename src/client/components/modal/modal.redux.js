import { createReducer } from '@reduxjs/toolkit';

export const modalInitialState = {
    authModal: {
        open: false
    },
    profileModal: {
        open: false
    }
};

export const openModal = key => ({
    type: 'modal/open',
    key
});

export const closeModal = key => ({
    type: 'modal/close',
    key
});

export const toggleModal = key => (dispatch, getState) => {
    const isModalOpen = getState().modal[key].open;
    return isModalOpen ? dispatch(closeModal(key)) : dispatch(openModal(key));
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
