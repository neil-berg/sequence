/* global localStorage */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from '../store/store';
import { removeUser, setUser } from '../actions';

export const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const dispatch = useDispatch();
  const userId = useSelector<StoreState>(state => state.user._id);

  React.useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const token = localStorage.getItem('seq:token');
        const {
          data: { user }
        } = await axios.get('/api/v1/user/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setIsAuthenticated(true);
        dispatch(setUser(user));
      } catch (error) {
        setIsAuthenticated(false);
        dispatch(removeUser());
      }
    };
    checkUserAuth();
  }, [userId]);

  return isAuthenticated;
};
