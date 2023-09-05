import React from 'react'
import { Header } from '../Header/Header'
import { AboutPage } from '../AboutPage/AboutPage';
import c from './Profile.module.css';
import { AttendancePage } from '../AttendancePage/AttendancePage';

export const Profile = ({ firstName, secondName, photo, type, status, birth, email, phone, card, setFirstName, setSecondName, setBirth, setPhone, setEmailState, setCard, setActive }) => {
    return (
        <>
            <Header name={firstName + ' ' + secondName} photo={photo} />
            <div className={c.about}>
                <AboutPage setFirstName={setFirstName} setSecondName={setSecondName} setBirth={setBirth} setPhone={setPhone} setEmailState={setEmailState} setCard={setCard} setActive={setActive} firstName={firstName} secondName={secondName} status={status} birth={birth} email={email} phone={phone} card={card} />
                <AttendancePage />
            </div>
        </>
    )
}
