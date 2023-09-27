import React from 'react';
import c from './NavOption.module.css';
import { Link } from 'react-router-dom';

export const NavOption = ({ text, src, link }) => {

    const href = `/${link}`;

    return (
        <Link to={href} className={c.navOption}>
            <img className={c.optionImage} src={src} alt={text}></img>
            <span>{text}</span>
        </Link>
    )
}
