import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
    const [name, setName] = useState(null);

    const signupUser = async () => {
        const name = 'Neil Berg';
        const username = 'nberg';
        const email = 'name2@example.com';
        const password = 'red1234!';
        try {
            const res = await axios.post('http://localhost:3000/user/signup', {
                name,
                username,
                email,
                password
            });
            console.log(res);
        } catch (error) {
            console.log(error.response);
        }
    };

    const testCall = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user/test');
            console.log(res.data);
        } catch (error) {
            console.log('an error', error.response);
        }
    };

    const loginUser = async () => {
        try {
            const { data } = await axios.post(
                'http://localhost:3000/user/login',
                {
                    email: 'name1@example.com',
                    password: 'red1234'
                }
            );
            setName(data.user.name);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div>
            <h2>HOT RELOADING?</h2>
            <h3>{`User: ${name}`}</h3>
            <button onClick={() => signupUser()}>SIGNUP</button>
            <button onClick={() => testCall()}>TEST</button>
            <button onClick={() => loginUser()}>LOGIN</button>
        </div>
    );
};
