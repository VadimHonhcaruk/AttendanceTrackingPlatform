import React from 'react';
import c from './NavHeader.module.css';
import moon from '../../../images/moon.svg'

export const NavHeader = ({ themeChange }) => {
    return (
        <div className={c.navHeader}>
            <p>MyAT</p>
            <div className={c.moonCont} onClick={themeChange}>
                <img alt='moon' src={moon} className={c.moon}></img>
            </div>
        </div>
    )
}
