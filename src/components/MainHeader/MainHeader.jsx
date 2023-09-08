import React from 'react';
import c from './MainHeader.module.css';
import { Menu } from '../Menu/Menu';

export const MainHeader = ({ setPage }) => {
    return (
        <div className={c.mainHeader}>
            <div className={c.title}>MyEnglishHome</div>
            <Menu setPage={setPage} />
        </div>
    )
}
