import React from 'react';
import c from './AttendancePage.module.css';
import { Present } from '../Present/Present';

export const AttendancePage = () => {
    return (
        <div className={c.attendancecont}>
            <div className={c.headerAttendance}>
                <div className={c.flex}>Attendance</div>
            </div>
            <div className={c.flexcent}>
                <Present status='Present' date='1/09/2023' event='Xensiow' />
                <Present status='Absent' date='2/09/2023' event='Qxzeow' />
                <Present status='Present' date='3/09/2023' event='Poiwnqc' />
                <Present status='Present' date='4/09/2023' event='Ukvrie' />
            </div>
        </div>
    )
}
