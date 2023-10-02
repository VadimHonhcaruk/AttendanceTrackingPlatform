import React from 'react';
import classes from './Modal.module.css';

export default function Modal({ setModalVision, note, setNote }) {
    return (
        <div onClick={() => { setModalVision(false); }} className={classes.modal}>
            <div className={classes.modalWindow} onClick={(event) => event.stopPropagation()}>
                <p>Note</p>
                <textarea className={classes.note} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            </div>
        </div>
    )
}
