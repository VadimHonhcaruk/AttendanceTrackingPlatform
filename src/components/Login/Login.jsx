import React from 'react';
import c from './Login.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Login = ({ email, password, setEmail, setPassword, error }) => {
    return (
        <div className={c.center}>
            <div className={c.login}>
                <h3 className={c.h3}>Login to Your Account</h3>
                <Input inputname='email' label='Email' type='email' value={email} onchange={setEmail} />
                <Input inputname='password' label='Password' type='password' value={password} onchange={setPassword} />
                <p className={c.error}>{error ? 'Invalid email or password' : null}</p>
                <Button tag='Login' />
            </div>
        </div>
    )
}
