import React, { useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './CreatePage.module.css';
import { Input } from './Input';

export const CreatePage = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <>
            <HeaderAdd title='Create student' />
            <div className={c.cont}>
                <div className={c.main}>
                    <div className={c.details}>STUDENT DETAILS</div>
                    <Input label='First name' name={first} setName={setFirst} pattern="[А-Яа-яЁёІіЇїЄє]+" />
                </div>
            </div>
        </>
    )
}
