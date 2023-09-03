import React from 'react';
import c from './Button.module.css';

export const Button = ({ tag, onclick }) => {
    return (
        <div onClick={onclick} className={c.button}>{tag}</div>
    )
}
