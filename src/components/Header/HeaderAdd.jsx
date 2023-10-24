import React from 'react';
import c from "./HeaderAdd.module.css";


export const HeaderAdd = ({ title, get }) => {
    return (
        <div className={c.header}>
            <p className={c.who}>{title}</p>
            {get && <div className={c.butt}>Add {get}</div>}
        </div>
    )
}
