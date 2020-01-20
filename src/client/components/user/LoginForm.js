/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { setUser } from './user.redux';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState('create');
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
                placeholder: 'Enter your full name',
                pattern: "^[a-zA-Z'\s].{2,}",
                title:
                    'Must contain only letters, spaces, or apostrophes and be at least 2 characters long.'
            },
            {
                id: 'username',
                label: 'Username',
                type: 'text',
                required: true,
                autoComplete: 'on',
                placeholder: 'Choose a username',
                pattern: "^[a-zA-Z'\s].{2,}",
                title:
                    'Must contain only letters, spaces, or apostrophes and be at least 2 characters long.'
            },
            {
                id: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                autoComplete: 'on',
                placeholder: 'Enter your email'
            },
            {
                id: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                autoComplete: 'on',
                placeholder: 'Enter a strong password',
                pattern: '(?=.*d)(?=.*[~`!@#$%^*()+=_-{}|:;”’?/<>,.]).{8,}',
                title:
                    'Must be at least 8 characters long and contain at least one number and one special characer'
            }
        ];

        const fieldsToShow = loginType === 'login' ? fields.slice(2) : fields;

        return fieldsToShow.map(({ id, label, type, ...props }) => (
            <div className='field' key={id}>
                <label className='field__label' htmlFor={id}>{label}</label>
                <input
                    className='field__input'
                    type={type}
                    name={id}
                    id={id}
                    value={userDetails[id]}
                    placeholder={props.placeholder && props.placeholder || null}
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
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .field {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 0 0.75rem 0;
        padding: 0;
    }

    .field__label {
        margin: 0 0 0.25rem 0;
        padding: 0;
    }

    .field__input {
        height: 2rem;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        border-radius: 5px;
        transition: background 0.35s ease;
    }

    .field__input::placeholder {
        font-size: 0.8rem;
        transform: translateX(10px);
    }

    .field__input:focus {
        background: var(--white);
        border-radius: 0px;
        border-bottom: 2px black solid;
    }

    .field__input:not(focus) {
        background: lightgrey;
    }
`;
