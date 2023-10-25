import React, { useState, useEffect } from 'react';
import classes from './Modal.module.css';
import { getNote } from '../../function/getNote';
import { postNote } from '../../function/postNote';

export default function Modal({ groupId, choosenDay, setModalVision }) {

    const [note, setNote] = useState('');

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    useEffect(() => {

        async function fetchDataNote() {
            if (groupId) {
                try {
                    const response = await getNote(groupId, choosenDay, PATH, TOKEN, AUTH);
                    const data = await response.json();
                    setNote(data.text);
                }
                catch (error) {
                    console.log('Network error: ', error)
                }
            }
        }

        fetchDataNote();
    }, [AUTH, TOKEN, PATH, choosenDay, groupId])


    return (
        <div onClick={() => { setModalVision(false); }} className={classes.modal}>
            <div className={classes.modalWindow} onClick={(event) => event.stopPropagation()}>
                <p className={classes.noteTitle}>CLASS NOTE | {choosenDay}</p>
                <textarea className={classes.note} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                <div className={classes.saveCont}><div onClick={() => {
                    setModalVision(false);
                    if (groupId) {
                        try {
                            postNote(groupId, choosenDay, note, PATH, TOKEN, AUTH);
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
