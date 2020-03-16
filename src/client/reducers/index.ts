import { combineReducers } from 'redux';

import { StoreState } from '../store/store';
import { userReducer } from './user';
import { modalReducer } from './modal';

export const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  modal: modalReducer
});
