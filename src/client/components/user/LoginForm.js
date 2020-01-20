/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { setUser } from './user.redux';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState('login');
    const [userDetails, setUserDetails] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setUser(userDetails));

    };
    const renderFormFields = () => {
        const fields = [
            {
                id: 'name',
                label: 'Name',
                type: 'text',
                required: true,
                autoComplete: 'on',
                pattern: "^[a-zA-Z'\s].{2,}",
                title:
                    'Must contain only letters, spaces, or apostrophes and be at least 2 characters long.'
            },
            {
                id: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                autoComplete: 'on'
            },
            {
                id: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                autoComplete: 'on',
                pattern: '(?=.*d)(?=.*[~`!@#$%^*()+=_-{}|:;”’?/<>,.]).{8,}',
                title:
                    'Must be at least 8 characters long and contain at least one number and one special characer'
            }
        ];
        return fields.map(({ id, label, type, ...props }) => (
            <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    name={id}
                    id={id}
                    value={userDetails[id]}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    pattern={(props.pattern && props.pattern) || null}
                    title={(props.title && props.title) || null}
                    onChange={e =>
                        setUserDetails({ ...userDetails, [id]: e.target.value })
                    }
                />
            </div>
        ));
    };

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            {renderFormFields()}
            <button>Log In</button>
        </Form>
    );
};

export const Form = styled.form`
    height: 400px;
    width: 500px;
`;
