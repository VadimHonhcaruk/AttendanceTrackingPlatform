import React from 'react'
import { Header } from '../Header/Header'
import { AboutPage } from '../AboutPage/AboutPage';
import c from './Profile.module.css';
import { AttendancePage } from '../AttendancePage/AttendancePage';

export const Profile = ({ name, photo, type }) => {
    return (
        <>
            <Header name={name} photo={photo} />
            <div className={c.about}>
                <AboutPage name={name} />
                <AttendancePage />
            </div>
        </>
    )
}
