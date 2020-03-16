import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers';

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

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
