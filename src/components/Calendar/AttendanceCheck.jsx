import React from 'react';
import c from './AttendanceCheck.module.css';

export const AttendanceCheck = () => {
    return (
        <div className={c.attCont}>
            <div className={c.header}>
                <p className={c.att}>Attendance for</p>
            </div>
        </div>
    )
}
