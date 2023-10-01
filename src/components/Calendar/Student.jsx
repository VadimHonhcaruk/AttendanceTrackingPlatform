import React from 'react';
import c from './Student.module.css';

export const Student = ({ state, studentName, handleAttendanceChange }) => {
    return (
        <div className={c.flexCont}>
            <div className={c.name}>{studentName}</div>
            <div className={c.flex}>
                <div onClick={state === 'present' ? () => handleAttendanceChange(studentName, 'null') : () => handleAttendanceChange(studentName, 'present')} className={state === 'present' ? c.buttonGREEN + ' ' + c.buttonGREENchoosen : c.buttonGREEN}>Present</div>
                <div onClick={state === 'absent' ? () => handleAttendanceChange(studentName, 'null') : () => handleAttendanceChange(studentName, 'absent')} className={state === 'absent' ? c.buttonRED + ' ' + c.buttonREDchoosen : c.buttonRED}>Absent</div>
            </div>
        </div>
    )
}
