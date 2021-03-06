/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
/* global localStorage */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { Button } from '../button';
import { closeModal, setUser } from '../../actions';

enum LoginFormClasses {
  Field = 'field',
  FieldLabel = 'field__label',
  FieldInput = 'field__input',
  ButtonGroup = 'button-group',
  SubmitButton = '.submit-btn'
}

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const url = `/api/v1/user/${showLogin ? 'login' : 'signup'}`;
    try {
      const {
        data: { user, token }
      } = await axios.post(url, userDetails);
      localStorage.setItem('seq:token', token);
      dispatch(setUser(user));
      dispatch(closeModal('authModal'));
      setUserDetails({
        name: '',
        username: '',
        email: '',
        password: ''
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
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
        pattern: "^[a-zA-Z's].{2,}",
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
        pattern: "^[a-zA-Z's].{2,}",
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

    const fieldsToShow = showLogin ? fields.slice(2) : fields;

    return fieldsToShow.map(({ id, label, type, ...props }) => (
      <div className={LoginFormClasses.Field} key={id}>
        <label className={LoginFormClasses.FieldLabel} htmlFor={id}>
          {label}
        </label>
        <input
          className={LoginFormClasses.FieldInput}
          type={type}
          name={id}
          id={id}
          value={userDetails[id]}
          placeholder={(props.placeholder && props.placeholder) || null}
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
      <div className={LoginFormClasses.ButtonGroup}>
        <Button
          type='submit'
          flavor='outline'
          text={showLogin ? 'Login' : 'Signup'}
          color='var(--green)'
          background='var(--white)'
        />
        <Button
          flavor='text'
          text={showLogin ? 'Create an account' : 'Have an account?'}
          color='var(--green)'
          onClick={() => setShowLogin(!showLogin)}
        />
      </div>
    </Form>
  );
};

export const Form = styled.form`
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .${LoginFormClasses.Field} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 0 0.75rem 0;
    padding: 0;
  }

  .${LoginFormClasses.FieldLabel} {
    margin: 0 0 0.25rem 0;
    padding: 0;
    color: var(--green);
    font-weight: bold;
  }

  .${LoginFormClasses.FieldInput} {
    height: 2rem;
    margin: 0;
    padding: 0 0 0 0.5rem;
    border: 0;
    outline: 0;
    border-radius: 5px;
    transition: background 0.35s ease;
  }

  .${LoginFormClasses.FieldInput}::placeholder {
    font-size: 0.8rem;
  }

  .${LoginFormClasses.FieldInput}:focus {
    background: var(--white);
    border-radius: 0px;
    border-bottom: 2px solid var(--green);
  }

  .${LoginFormClasses.FieldInput}:not(focus) {
    background: var(--lightgrey);
  }

  .${LoginFormClasses.ButtonGroup} {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .${LoginFormClasses.SubmitButton} {
    padding: 0.5rem 1rem;
  }
`;
