import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from './store';

export interface User {
  _id: number;
  name: string;
  username: string;
  email: string;
  created: Date;
  updated: Date;
}

export type ModalKey = 'authModal' | 'profileModal';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreState,
  unknown,
  Action<string>
>;
