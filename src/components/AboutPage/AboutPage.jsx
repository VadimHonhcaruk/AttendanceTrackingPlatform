import React from 'react';
import c from './AboutPage.module.css';
import { Button } from '../Button/Button';
import { Info } from '../Info/Info';
import { useState } from "react";
export const AboutPage = ({ setFirstName, setSecondName, setBirth, setPhone, setEmailState, setCard, setActive, firstName, secondName, birth, email, phone, card, status, price, list, type }) => {

    const [edit, setEdit] = useState(false);

    return (
        <div className={c.about}>
            <div className={c.headerAbout}>
                <div className={c.flex}>About<p className={c.name}>{firstName + ' ' + secondName}</p></div>
                <Button onclick={() => setEdit(true)} tag='&#10606; Edit' classN={c.marg} />
            </div>
            <div className={c.flexcent}>
                <Info edit={edit} label='First name' onch={setFirstName} info={firstName} />
                <Info edit={edit} label='Last name' onch={setSecondName} info={secondName} />
                <Info edit={edit} label='Birth' onch={setBirth} info={birth || 'There is no date of birth'} />
                <Info edit={edit} label='Phone' onch={setPhone} info={phone || 'There is no phone'} />
                <Info edit={edit} label='Email' onch={setEmailState} info={email || 'There is no email'} />
                <Info edit={edit} label='Card' onch={setCard} info={card || 'There is no card'} />
                <Info edit={edit} label='Status' info={status} onch={setActive} />
                <div className={c.buttons}>
                    <Button onclick={() => setEdit()} tag='Delete account' classN={c.deleteButt} />
                    <Button onclick={edit ? () => setEdit(prev => !prev) : null} tag='Save' classN={!edit ? c.noneactive + ' ' + c.savebutt : c.savebutt} />
                </div>
            </div>
        </div >
    )
}
