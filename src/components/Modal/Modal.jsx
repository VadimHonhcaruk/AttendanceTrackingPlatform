import React, { useState, useEffect } from 'react';
import classes from './Modal.module.css';
import { Input } from '../CreatePage/Input';
import { onlyNumb } from '../../function/onlyNumb';
import moment from 'moment';

export default function ModalPrice({ groupId, setModalPrice }) {

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    return (
        <div onClick={() => { setModalPrice(false); }} className={classes.modal}>
            <div className={classes.modalWindow} onClick={(event) => event.stopPropagation()}>
                <p className={classes.noteTitle}>NEW PRICE FOR GROUP 2</p>
                <Input label='Price' onInput={onlyNumb} name={price} setName={setPrice} maxLength={3} />
                <Input label='Date' type="date" name={date} setName={setDate} min={moment().format('YYYY-MM-DD')} />
                <div className={classes.saveCont}><div onClick={() => {
                    setModalPrice(false);
                    if (groupId) {
                        try {

                        }
                        catch (error) {
                            console.log('Network error: ', error)
                        }
                    }
                }} className={classes.save}>SAVE</div></div>
            </div>
        </div>
    )
}
