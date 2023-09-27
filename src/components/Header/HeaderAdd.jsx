import React from 'react';
import c from "./HeaderAdd.module.css";


export const HeaderAdd = ({ title }) => {
    return (
        <div className={c.header}>
            <p className={c.who}>{title}</p>
        </div>
    )
}
