import { useState } from 'react';
import c from './CreatePage.module.css';

export const Input = ({ label, name, setName, pattern, type = 'text' }) => {

    const [error, setError] = useState('');

    return (
        <>
            <label className={c.label}>{label}</label><br />
            <input className={c.input} value={name} onChange={(e) => setName(e.target.value)} type={type} maxLength={30} pattern={pattern} />
        </>
    )
}