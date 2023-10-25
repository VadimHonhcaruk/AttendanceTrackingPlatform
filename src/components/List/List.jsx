import React, { useEffect, useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './List.module.css';
import { getStudents } from '../../function/getStudents';
import { getRepresentive } from '../../function/getRepresentive';


export const List = ({ get }) => {


    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [info, setInfo] = useState([]);
    const [sortedInfo, setSortedInfo] = useState([]);
    const [sortType, setSortType] = useState('');
    const [amount, setAmount] = useState(0);
    const [filter, setFilter] = useState('');
    const [type, setType] = useState('Active only');
    const [status, setStatus] = useState('active');


    useEffect(() => {
        async function fetchDataStudents() {
            try {
                const response = await getStudents(PATH, TOKEN, AUTH);
                const data = await response.json();
                setInfo(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        }

        async function fetchDataRepresentive() {
            try {
                const response = await getRepresentive(PATH, TOKEN, AUTH);
                const data = await response.json();
                setInfo(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        }

        if (get === 'student') {
            fetchDataStudents();
        } else {
            fetchDataRepresentive();
        }
    }, [TOKEN, AUTH, PATH, get])

    useEffect(() => {
        setSortedInfo(info);
        setAmount(info.length);
    }, [info])

    useEffect(() => {
        switch (sortType) {
            case 'first':
                const sortedData = [...sortedInfo];
                sortedData.sort((a, b) => a.firstname.localeCompare(b.firstname));
                setSortedInfo(sortedData);
                break;
            case 'firstSWAP':
                const sortedData11 = [...sortedInfo];
                sortedData11.sort((b, a) => a.firstname.localeCompare(b.firstname));
                setSortedInfo(sortedData11);
                break;
            case 'last':
                const sortedData2 = [...sortedInfo];
                sortedData2.sort((a, b) => a.lastname.localeCompare(b.lastname));
                setSortedInfo(sortedData2);
                break;
            case 'lastSWAP':
                const sortedData22 = [...sortedInfo];
                sortedData22.sort((b, a) => a.lastname.localeCompare(b.lastname));
                setSortedInfo(sortedData22);
                break;
            case 'mobile':
                const sortedData3 = [...sortedInfo];
                sortedData3.sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
                setSortedInfo(sortedData3);
                break;
            case 'mobileSWAP':
                const sortedData33 = [...sortedInfo];
                sortedData33.sort((b, a) => a.phoneNumber.localeCompare(b.phoneNumber));
                setSortedInfo(sortedData33);
                break;

            default:
                break;
        }
    }, [sortType, info]);

    useEffect(() => {
        setSortedInfo(info);
        setSortedInfo((prev) => prev.filter((obj) => {
            return (
                obj.firstname.toLowerCase().includes(filter.toLowerCase()) ||
                obj.lastname.toLowerCase().includes(filter.toLowerCase()) ||
                obj.phoneNumber.includes(filter)
            );
        }));
        if (sortType) {
            const type = sortType;
            setSortType('');
            setTimeout(() => {
                setSortType(type);
            }, 0);
        }
    }, [info, filter])




    return (
        <div>
            <HeaderAdd title={`View ${amount} ${get}s`} get={get} />
            <div className={c.listCont}>
                <div className={c.main}>
                    <div className={c.headerTable}>
                        <select value={type} onChange={(e) => setType(e.target.value)} className={c.select}>
                            <option onClick={() => setStatus('active')}>Active only</option>
                            <option onClick={() => setStatus('inactive')}>Archived only</option>
                            <option onClick={() => setStatus('')}>All</option>
                        </select>
                        <input className={c.input} type="text" placeholder="Search..." value={filter} onChange={(e) => { setFilter(e.target.value) }} />
                    </div>
                    <table className={c.table}>
                        <tr>
                            <th className={c.curs} onClick={() => setSortType(sortType === 'first' ? 'firstSWAP' : 'first')}><div className={c.curs}>FIRST</div></th>
                            <th className={c.curs} onClick={() => setSortType(sortType === 'last' ? 'lastSWAP' : 'last')}><div className={c.curs}>LAST</div></th>
                            <th className={c.curs} onClick={() => setSortType(sortType === 'mobile' ? 'mobileSWAP' : 'mobile')}><div className={c.curs}>MOBILE PHONE</div></th>
                        </tr>
                        {sortedInfo[0] && sortedInfo.map((obj) => {
                            if (obj.status === status || !status) {
                                return (<tr>
                                    <td>{obj.firstname}</td>
                                    <td>{obj.lastname}</td>
                                    <td>{obj.phoneNumber}</td>
                                </tr>)
                            }
                            return null;
                        })

                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
