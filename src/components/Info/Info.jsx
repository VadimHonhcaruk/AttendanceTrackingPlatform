import React from 'react';
import c from './Info.module.css';

export const Info = ({ edit, label, info, onch }) => {
    return (!edit ?
        <div className={c.cont}>

            <div className={c.label}>{label}</div>
            <div className={c.info}>{info}</div>
        </div> :
        <div className={c.cont}>
            <div className={c.label}>{label}</div>
            <input className={c.input} type='text' value={info} onChange={(e) => onch(e.target.value)} />
        </div>
    )
}
