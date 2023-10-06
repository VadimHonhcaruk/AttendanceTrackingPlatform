import React from 'react';
import c from './Student.module.css';

export const Student = ({ state, studentId, studentName, handleAttendanceChange }) => {
    return (
        <div className={c.flexCont}>
            <div className={c.name}>{studentName}</div>
            <div className={c.flex}>
                <div onClick={state === 'present' ? () => handleAttendanceChange(studentId, 'null') : () => handleAttendanceChange(studentId, 'present')} className={state === 'present' ? c.buttonGREEN + ' ' + c.buttonGREENchoosen : c.buttonGREEN}>Present</div>
                <div onClick={state === 'absent' ? () => handleAttendanceChange(studentId, 'null') : () => handleAttendanceChange(studentId, 'absent')} className={state === 'absent' ? c.buttonRED + ' ' + c.buttonREDchoosen : c.buttonRED}>Absent</div>
            </div>
        </div>
    )
}
