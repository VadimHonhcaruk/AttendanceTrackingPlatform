import React from 'react';
import c from './AboutPage.module.css';
import { Button } from '../Button/Button';
import { Info } from '../Info/Info';
import { useState } from "react";

export const AboutPage = ({ name, birth, email, phone, card, password, price, list, type }) => {

    const [birthday, setBirth] = useState(birth);
    const [phoneState, setPhone] = useState(phone);
    const [emailState, setEmail] = useState(email);
    const [cardState, setCard] = useState(card);
    const [passwordState, setPassword] = useState(password);

    const [edit, setEdit] = useState(false);

    return (
        <div className={c.about}>
            <div className={c.headerAbout}>
                <div className={c.flex}>About<p className={c.name}>{name}</p></div>
                <Button onclick={() => setEdit(true)} tag='&#10606; Edit' classN={c.marg} />
            </div>
            <div className={c.flexcent}>
                <Info edit={edit} label='Birth' onch={setBirth} info={birthday || 'There is no date of birth'} />
                <Info edit={edit} label='Phone' onch={setPhone} info={phoneState || 'There is no phone'} />
                <Info edit={edit} label='Email' onch={setEmail} info={emailState || 'There is no email'} />
                <Info edit={edit} label='Card' onch={setCard} info={cardState || 'There is no card'} />
                <Info edit={edit} label='Password' onch={setPassword} info={passwordState} />
                <Button onclick={edit ? () => setEdit(prev => !prev) : null} tag='Save' classN={!edit ? c.noneactive + ' ' + c.savebutt : c.savebutt} />
            </div>
        </div>
    )
}
