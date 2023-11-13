import React from 'react'
import c from './Profile.module.css';
import { HeaderAdd } from '../Header/HeaderAdd';

export const Profile = ({ firstName, secondName, photo, type, status, birth, email, phone, card, setFirstName, setSecondName, setBirth, setPhone, setEmailState, setCard, setActive }) => {
    return (
        <>
            <HeaderAdd title={`Vadim Honcharuk`} />
            <div className={c.cont}>
                <div className={c.main}>

                </div>
            </div>
        </>
    )
}
