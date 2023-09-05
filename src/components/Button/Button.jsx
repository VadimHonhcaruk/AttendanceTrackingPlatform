import React from 'react';
import c from './Button.module.css';

export const Button = ({ tag, onclick, classN }) => {
    return (
        <div onClick={onclick} className={c.button + ' ' + classN}>{tag}</div>
    )
}
