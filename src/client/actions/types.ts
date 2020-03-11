import { User, ModalKey } from '../store/types';

/** User action types */
export const SET_USER = 'user/add';
export const DELETE_USER = 'user/remove';

interface SetUserAction {
    type: typeof SET_USER;
    user: User;
}

interface DeleteUserAction {
    type: typeof DELETE_USER;
}

export type UserActionTypes = SetUserAction | DeleteUserAction;

/** Modal action types */
export const OPEN_MODAL = 'modal/open';
export const CLOSE_MODAL = 'modal/close';

interface OpenModalAction {
    type: typeof OPEN_MODAL;
    key: ModalKey;
}

interface CloseModalAction {
    type: typeof CLOSE_MODAL;
    key: ModalKey;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;
