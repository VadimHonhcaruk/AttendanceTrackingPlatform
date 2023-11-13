import React from 'react';
import c from './ProfileNav.module.css';
import profile from '../../images/profile.svg';
import arrowDark from '../../images/arrowDark.svg';
import arrowWhite from '../../images/arrowWhite.svg';


export const ProfileNav = ({ photo, theme, setHide, hide }) => {
    return (
        <div className={c.profileNav} onClick={() => setHide(!hide)}>
            <div className={c.profile}>
                <span className={c.name}>Vodexi</span>
                <img className={c.arrow} alt='arrowDow' src={theme === 'dark' ? arrowWhite : arrowDark}></img>
            </div>
            <div className={hide ? c.drop + ' ' + c.hide : c.drop}>
                <div className={c.photoName}>
                    <span className={c.fullName}>Vodexi Johnson</span>
                </div>
                <div className={c.borderTop}>
                    <div className={c.button}>Profile</div>
                    <div className={c.button}>MyAT Settings</div>
                </div>
                <div className={c.borderTop}>
                    <div className={c.button}>Log out</div>
                </div>
            </div>
        </div>
    )
}
