import React from 'react';
import c from './SearchBar.module.css';
import searchBlue from '../../../images/searchBlue.svg';
import searchLight from '../../../images/searchLight.svg';

export const SearchBar = ({ theme }) => {
    return (
        <div className={c.search}>
            <input className={c.input} type="text" placeholder="Search..." />
            <img src={theme === 'dark' ? searchLight : searchBlue} alt='search' className={c.searchIcon}></img>
        </div>
    )
}
