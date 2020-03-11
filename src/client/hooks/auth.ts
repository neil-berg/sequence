/* global localStorage */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { StoreState } from '../store/store';
import { setUser, removeUser } from '../actions';

export const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector<StoreState>(state => state.user._id);

  useEffect(() => {
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