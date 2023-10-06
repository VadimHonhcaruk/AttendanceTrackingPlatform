import React, { useEffect } from 'react';
import c from './AttendanceCheck.module.css';
import { getGroup } from '../../function/getGroup';
import { useState } from 'react';
import { getGroupAttendance } from '../../function/getGroupAttendance';
import { Student } from './Student';

export const AttendanceCheck = ({ groupId, setGroupId, choosenDay, email, setModalVision }) => {

    const [groups, setGroups] = useState([]);
    const [group, setGroup] = useState('Please choose');
    const [attendance, setAttendance] = useState([]);

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const handleAttendanceChange = (studentId, value) => {
        setAttendance((prevStudents) =>
            prevStudents.map((student) =>
                student.studentId === studentId
                    ? { ...student, attendanceStatus: value }
                    : student
            )
        );
    };

    const handleAttendanceChangeAll = (value) => {
        setAttendance(attendance.map(item => { return ({ ...item, 'attendanceStatus': value, }) }));
    };

    useEffect(() => {
        if (groupId) {
            fetchDataAttendance();
        }
    }, [groupId, choosenDay])


    async function fetchDataAttendance() {
        const response = await getGroupAttendance(groupId, choosenDay, PATH, TOKEN, AUTH);
        const data = await response.json();
        if (data?.studentsAttendances[0]?.studentsStatuses) {
            setAttendance(data.studentsAttendances[0].studentsStatuses);
        }
    }

    async function fetchData() {
        const response = await getGroup(email, PATH, TOKEN, AUTH);
        const data = await response.json();
        setGroups(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


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
                <div className={c.select} onClick={() => setModalVision(true)}> Note </div>
                <select className={c.select}>
                    <option>Mark All</option>
                    <option onClick={() => handleAttendanceChangeAll('present')}>Present</option>
                    <option onClick={() => handleAttendanceChangeAll('absent')}>Absent</option>
                </select>
            </div>
            <div className={c.students}>
                {attendance.map(item => (
                    <Student handleAttendanceChange={handleAttendanceChange} studentId={item.studentId} studentName={item.studentName} state={item.attendanceStatus} />
                ))}
            </div>
            <div className={c.saveCont}><div className={c.save}>Save</div></div>
        </div>
    )
}
