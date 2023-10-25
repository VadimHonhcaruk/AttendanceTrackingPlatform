import React from 'react';
import c from "./HeaderAdd.module.css";
import { Link } from 'react-router-dom';


export const HeaderAdd = ({ title, get, link }) => {
    return (
        <div className={c.header}>
            <p className={c.who}>{title}</p>
            {get && <Link to={`/create/${get}`} className={c.butt}>Create {get}</Link>}
        </div>
    )
}
