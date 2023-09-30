import React, { useEffect } from 'react';
import c from './AttendanceCheck.module.css';
import { getGroup } from '../../function/getGroup';
import { useState } from 'react';

export const AttendanceCheck = ({ email }) => {

    const [groups, setGroups] = useState([{ groupId: 1, groupTitle: 'TR-02' }, { groupId: 2, groupTitle: 'TR-01' }, { groupId: 3, groupTitle: 'TR-06' }]);
    const [group, setGroup] = useState('Please choose');

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    useEffect(() => {
        async function fetchDataAttendance() {
            const data = await getGroup(email, PATH, TOKEN, AUTH);
        }

        const data = fetchDataAttendance();
    }, [group])


    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await getGroup(email, PATH, TOKEN, AUTH);
    //     }

    //     const data = fetchData();
    //     setGroups(data);
    // }, [])


    return (
        <div className={c.attCont}>
            <div className={c.header}>
                <p className={c.att}>Attendance for</p>
                <select value={group} onChange={(e) => setGroup(e.target.value)} className={c.select}>
                    <option>Please choose</option>
                    {groups.map(((item) => {
                        return (
                            <option value={item.title}>{item.groupTitle}</option>
                        )
                    })
                    )
                    }

                </select>
            </div>
        </div>
    )
}
