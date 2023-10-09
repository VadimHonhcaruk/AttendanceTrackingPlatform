import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import Header from './Header';
import classes from './MainContent.module.css';
import moment from 'moment/moment';
import { HeaderAdd } from '../Header/HeaderAdd';
import { AttendanceCheck } from './AttendanceCheck';
import { getGroupAttendance } from '../../function/getGroupAttendance';

export function MainContent({ groupId, setGroupId, setModalVision, choosenDay, setChoosenDay }) {

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

    const [attendance, setAttendance] = useState([]);
    const [resultArray, setResultArray] = useState([]);

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

    useEffect(() => {

        async function fetchDataAttendance() {
            if (groupId) {
                const response = await getGroupAttendance(groupId, today.clone().startOf('month').startOf('week').format('YYYY-MM-DD'), PATH, TOKEN, AUTH, today.clone().endOf('month').endOf('week').format('YYYY-MM-DD'));
                const data = await response.json();
                setAttendance(data.studentsAttendances);
            }
        }

        fetchDataAttendance();
    }, [today, PATH, TOKEN, AUTH, groupId])

    const processInputArray = async () => {
        const processedArray = await attendance.map((item) => {
            if (item.studentsStatuses) {
                const attendanceDate = item.attendanceDate;
                const studentsStatuses = item.studentsStatuses;

                let presentCount = 0;
                let absentCount = 0;

                studentsStatuses.forEach((student) => {
                    if (student.attendanceStatus === "present") {
                        presentCount++;
                    } else if (student.attendanceStatus === "absent") {
                        absentCount++;
                    }
                });

                return {
                    attendanceDate: attendanceDate,
                    present: presentCount,
                    absent: absentCount,
                };
            }
        });
        await setResultArray(processedArray);

    }

    useEffect(() => {
        processInputArray();
    }, [attendance]);

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
                    <CalendarGrid choosenDay={choosenDay} setChoosenDay={setChoosenDay} startDay={startDay} today={today} attendanceList={resultArray} />
                </div>
                <AttendanceCheck setModalVision={setModalVision} setGroupId={setGroupId} groupId={groupId} choosenDay={choosenDay} email='user1@example.com' />
            </div>
        </>
    )
}