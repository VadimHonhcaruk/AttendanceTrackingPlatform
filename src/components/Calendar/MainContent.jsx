import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import Header from './Header';
import classes from './MainContent.module.css';
import moment from 'moment/moment';
import { HeaderAdd } from '../Header/HeaderAdd';
import { AttendanceCheck } from './AttendanceCheck';
import { getGroupAttendance } from '../../function/getGroupAttendance';

export function MainContent({ setModalVision }) {

    const [choosenDay, setChoosenDay] = useState((moment()).format('YYYY-MM-DD'));
    const [groupId, setGroupId] = useState(1);

    moment.updateLocale('en', { week: { dow: 1 } });
    const [today, setToday] = useState(() => {
        const todaymoment = moment();
        if (localStorage.getItem('today')) {
            const localStorageToday = JSON.parse(localStorage.getItem('today'));
            todaymoment.set('year', localStorageToday.slice(0, 4));
            todaymoment.set('month', localStorageToday.slice(5, 7) - 1);
        }
        return todaymoment;
    });

    const [attendance, setAttendance] = useState([
        {
            "attendanceDate": "2023-10-01",
            "attendances": {
                "additionalProp1": "present",
                "additionalProp2": "present",
                "additionalProp3": "present"
            }
        },
        {
            "attendanceDate": "2023-10-05",
            "attendances": {
                "additionalProp1": "present",
                "additionalProp2": "present",
                "additionalProp3": "present"
            }
        }
    ]);

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    useEffect(() => {
        localStorage.setItem('today', JSON.stringify(today));
    }, [today]);

    const startDay = today.clone().startOf('month').startOf('week');

    const previous = () => {
        setToday(prev => prev.clone().subtract(1, 'month'));
    }

    // async function fetchDataAttendance() {
    //     const response = await getGroupAttendance(groupId, today.clone().startOf('month').format('YYYY-MM-DD'), PATH, TOKEN, AUTH, today.clone().endOf('month').format('YYYY-MM-DD'));
    //     const data = await response.json();
    //     setAttendance(data.studentsAttendances);
    //     setAttendance(absentAndPresent());
    // }

    const absentAndPresent = () => {
        const copy = attendance.map((x) => {
            let present = 0, absent = 0;
            for (const key in x.attendances) {
                x.attendances[key] === 'present' ? ++present : ++absent;
            }
            return { attendanceDate: x.attendanceDate, present: present, absent: absent, }
        });
        return copy;
    }

    useEffect(() => {
        // fetchDataAttendance();
        setAttendance(absentAndPresent());
    }, [today, PATH, TOKEN, AUTH, groupId])


    const next = () => {
        setToday(prev => prev.clone().add(1, 'month'));
    }

    return (
        <>
            <HeaderAdd title='Attendance' />
            <div className={classes.flex}>
                <div className={classes.mainContent}>
                    <Header
                        previous={previous}
                        next={next}
                        today={today}
                        setToday={setToday}
                    />
                    <CalendarGrid choosenDay={choosenDay} setChoosenDay={setChoosenDay} startDay={startDay} today={today} attendanceList={attendance} />
                </div>
                <AttendanceCheck setModalVision={setModalVision} setGroupId={setGroupId} groupId={groupId} choosenDay={choosenDay} email='vadimhonc@gmail.com' />
            </div>
        </>
    )
}