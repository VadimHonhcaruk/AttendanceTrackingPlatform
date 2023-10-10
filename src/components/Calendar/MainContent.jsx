import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import Header from './Header';
import classes from './MainContent.module.css';
import moment from 'moment/moment';
import { HeaderAdd } from '../Header/HeaderAdd';
import { AttendanceCheck } from './AttendanceCheck';
import { getGroupAttendance } from '../../function/getGroupAttendance';

export function MainContent({ groupTitle, setGroupTitle, updater, groupId, setGroupId, setModalVision, choosenDay, setChoosenDay }) {

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

    const startDay = today.clone().startOf('month').startOf('week');

    const previous = () => {
        setToday(prev => prev.clone().subtract(1, 'month'));
    }

    const next = () => {
        setToday(prev => prev.clone().add(1, 'month'));
    }

    useEffect(() => {
        localStorage.setItem('today', JSON.stringify(today));
    }, [today]);

    useEffect(() => {

        async function fetchDataAttendance() {
            if (groupId) {
                const response = await getGroupAttendance(groupId, today.clone().startOf('month').format('YYYY-MM-DD'), PATH, TOKEN, AUTH, today.clone().endOf('month').format('YYYY-MM-DD'));
                const data = await response.json();
                setAttendance(data.studentsAttendances);
            }
        }

        fetchDataAttendance();
    }, [today, PATH, TOKEN, AUTH, groupId])


    useEffect(() => {

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
                return null;
            });
            await setResultArray(processedArray);

        }

        processInputArray();
    }, [attendance]);

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
                <AttendanceCheck groupTitle={groupTitle} setGroupTitle={setGroupTitle} updater={updater} setModalVision={setModalVision} setGroupId={setGroupId} groupId={groupId} choosenDay={choosenDay} email='user3@example.com' />
            </div>
        </>
    )
}