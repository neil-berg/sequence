import { UserActionTypes } from './types';
import { DELETE_USER, SET_USER } from './types';
import { User } from '../store/types';

export const setUser = (user: User): UserActionTypes => ({
  type: SET_USER,
  user
});

export const removeUser = (): UserActionTypes => ({
  type: DELETE_USER
});
