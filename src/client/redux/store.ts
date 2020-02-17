import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from '@components/user/user.redux';
import { modalReducer } from '@components/modal/modal.redux';

export interface StoreState {
    user: {
        _id: number;
        name: string;
        username: string;
        email: string;
        created: Date;
        updated: Date;
    };
    modal: {
        authModal: {
            open: boolean;
        };
        profileModal: {
            open: boolean;
        };
    };
}

const rootReducer = combineReducers<StoreState>({
    user: userReducer,
    modal: modalReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
