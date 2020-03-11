import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from './store';

export interface User {
    _id: null;
    name: '';
    username: '';
    email: '';
    created: null;
    updated: null;
}

export type ModalKey = 'authModal' | 'profileModal';

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    StoreState,
    unknown,
    Action<string>
>;
