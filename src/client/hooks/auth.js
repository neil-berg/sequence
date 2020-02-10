/* global localStorage */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setUser } from '../components/user/user.redux';

export const useAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkUserAuth = async () => {
            try {
                const token = localStorage.getItem('seq:token');
                const { data: { user } } = await axios.get('/api/v1/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAuthUser(user);
                dispatch(setUser(user));
            } catch (error) {
                console.log(error);
            }
        };
        checkUserAuth();
    }, []);

    return authUser;
};
