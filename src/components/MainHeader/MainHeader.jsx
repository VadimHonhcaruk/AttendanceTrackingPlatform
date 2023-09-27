import React from 'react';
import c from './MainHeader.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ProfileNav } from '../ProfileNav/ProfileNav';

export const MainHeader = ({ theme, setHide, hide }) => {
    return (
        <div className={c.mainHeader}>
            <SearchBar theme={theme} />
            <ProfileNav theme={theme} setHide={setHide} hide={hide} />
        </div>
    )
}
