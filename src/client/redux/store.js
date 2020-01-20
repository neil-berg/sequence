import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer } from '@components/user/user.redux';
import { modalReducer } from '@components/modal/modal.redux';

const rootReducer = combineReducers({
    user: userReducer,
    modal: modalReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
