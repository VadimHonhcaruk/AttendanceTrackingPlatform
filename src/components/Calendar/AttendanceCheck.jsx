import React, { useEffect } from 'react';
import c from './AttendanceCheck.module.css';
import { getGroup } from '../../function/getGroup';
import { useState } from 'react';
import { getGroupAttendance } from '../../function/getGroupAttendance';
import { Student } from './Student';
import { getStudentsByGroup } from '../../function/getStudentsByGroup';
import { postAttendance } from '../../function/postAttendance';

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
                student.studentId === studentId || student.id === studentId
                    ? { ...student, attendanceStatus: value }
                    : student
            )
        );
    };

    const handleAttendanceChangeAll = (value) => {
        setAttendance(attendance.map(item => { return ({ ...item, 'attendanceStatus': value, }) }));
    };

    useEffect(() => {

        async function fetchDataAttendance() {
            try {
                const response = await getGroupAttendance(groupId, choosenDay, PATH, TOKEN, AUTH);
                const data = await response.json();
                if (await data?.studentsAttendances[0]?.studentsStatuses) {
                    await setAttendance(data.studentsAttendances[0].studentsStatuses);
                } else {
                    await fetchEnrollees();
                }
            } catch (error) {
                console.log(error)
            }

        }

        async function fetchEnrollees() {
            try {
                const response = await getStudentsByGroup(groupId, PATH, TOKEN, AUTH);
                const data = await response.json();
                if (await data[0]) {
                    await setAttendance(data);
                }
            } catch (error) {
                console.log(error)
            }

        }

        if (groupId) {
            fetchDataAttendance();
        }


    }, [groupId, choosenDay, AUTH, PATH, TOKEN])


    useEffect(() => {

        async function fetchData() {
            try {
                const response = await getGroup(email, PATH, TOKEN, AUTH);
                const data = await response.json();
                await setGroups(data);
            } catch (error) {
                console.log(error)
            }

        }

        fetchData();
    }, [AUTH, PATH, TOKEN, email])

    const postAttendanceFunc = () => {
        const newAttendanceObject = {};
        attendance.forEach((item) => {
            const studentName = item.studentName || (item.firstname + item.lastname);
            const attendanceStatus = item.attendanceStatus || undefined;
            newAttendanceObject[studentName] = attendanceStatus;
        });
        postAttendance({ groupId, lessonDate: choosenDay, newAttendanceObject }, PATH, TOKEN, AUTH)
    }


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
                    <Student key={item.studentId || item.id} handleAttendanceChange={handleAttendanceChange} studentId={item.studentId || item.id} studentName={item.studentName || item.firstname + ' ' + item.lastname} state={item.attendanceStatus || undefined} />
                ))}
            </div>
            <div className={c.saveCont}><div className={c.save} onClick={postAttendanceFunc}>Save</div></div>
        </div>
    )
}
