import React, { useEffect } from 'react';
import c from './AttendanceCheck.module.css';
import { getGroup } from '../../function/getGroup';
import { useState } from 'react';
import { getGroupAttendance } from '../../function/getGroupAttendance';
import { Student } from './Student';

export const AttendanceCheck = ({ groupId, setGroupId, choosenDay, email }) => {

    const [groups, setGroups] = useState([{ groupId: 1, groupTitle: 'TR-02' }, { groupId: 2, groupTitle: 'TR-01' }, { groupId: 3, groupTitle: 'TR-06' }]);
    const [group, setGroup] = useState('Please choose');
    const [attendance, setAttendance] = useState({
        student1: 'present',
        student2: 'absent',
        student3: 'present',
    });

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const handleAttendanceChange = (studentName, value) => {
        setAttendance({
            ...attendance,
            [studentName]: value,
        })
    };

    const handleAttendanceChangeAll = (value) => {
        const att = { ...attendance };
        for (var key in att) {
            if (att.hasOwnProperty(key)) {
                att[key] = value;
            }
        }
        setAttendance(att);
    };

    // useEffect(() => {
    //     fetchDataAttendance();
    // }, [group])


    // async function fetchDataAttendance() {
    //     const response = await getGroupAttendance(groupId, choosenDay, PATH, TOKEN, AUTH);
    //     const data = await response.json();
    //     setAttendance(data.studentsAttendances[0].attendances);
    //     console.log(data);
    // }

    // async function fetchData() {
    //     const response = await getGroup(email, PATH, TOKEN, AUTH);
    //     const data = await response.json();
    //     setGroup(data);
    //     console.log(data);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])


    return (
        <div className={c.attCont}>
            <div className={c.header}>
                <div className={c.flex}>
                    <p className={c.att}>Attendance for</p>
                    <select value={group} onChange={(e) => setGroup(e.target.value)} className={c.select}>
                        <option>Please choose</option>
                        {groups.map(((item) => {
                            return (
                                <option onClick={() => setGroupId(item.groupId)} key={item.groupId} value={item.title}>{item.groupTitle}</option>
                            )
                        }))}
                    </select>
                </div>
                <select className={c.select}>
                    <option>Mark All</option>
                    <option onClick={() => handleAttendanceChangeAll('present')}>Present</option>
                    <option onClick={() => handleAttendanceChangeAll('absent')}>Absent</option>
                </select>
            </div>
            <div>
                {Object.entries(attendance).map(([studentName, state], index) => (
                    <Student key={index} handleAttendanceChange={handleAttendanceChange} studentName={studentName} state={state} />
                ))}
            </div>
        </div>
    )
}
