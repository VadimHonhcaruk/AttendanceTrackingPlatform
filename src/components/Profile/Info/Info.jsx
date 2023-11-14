import React from 'react';
import c from './Info.module.css';

export const Info = ({ what, when, edit = false, editingFunc }) => {
    return (
        <div className={c.info}>
            <div className={c.what}>{what}</div>
            <div className={c.when}>
                {edit ? <input className={c.input} value={when} onChange={(e) => editingFunc(e.target.value)} /> : when}
            </div>
        </div>
    )
}
