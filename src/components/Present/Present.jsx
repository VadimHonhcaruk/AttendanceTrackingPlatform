import React from 'react';
import c from './Present.module.css';

export const Present = ({ status, date, event }) => {
    return (
        <div className={c.cont}>
            <div className={status === 'Present' ? c.date : c.date + ' ' + c.absent}>{date}</div>
            <div className={status === 'Present' ? c.event : c.event + ' ' + c.absent}>{event}</div>
            <div className={status === 'Present' ? c.status : c.status + ' ' + c.absent}>{status}</div>
        </div>
    )
}
