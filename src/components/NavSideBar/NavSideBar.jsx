import React from 'react';
import c from './NavSideBar.module.css';
import { NavHeader } from './NavHeader/NavHeader';
import { NavContent } from './NavContent/NavContent';

export const NavSideBar = ({ themeChange }) => {
    return (
        <nav className={c.nav}>
            <NavHeader themeChange={themeChange} />
            <NavContent />
        </nav>
    )
}
