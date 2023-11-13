import React, { useEffect, useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './List.module.css';
import { getGroups } from '../../function/getGroups';

export const ListClasses = ({ get }) => {


    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [info, setInfo] = useState([]);
    const [sortedInfo, setSortedInfo] = useState([]);
    const [sortType, setSortType] = useState('');
    const [filter, setFilter] = useState('');
    const [type, setType] = useState('Active only');
    const [status, setStatus] = useState('active');

    const [amount, setAmount] = useState(0);


    useEffect(() => {
        async function fetchDataUsers() {
            try {
                const response = await getGroups(PATH, TOKEN, AUTH);
                const data = await response.json();
                setInfo(data);
            } catch (error) {
                console.log('Network error: ', error)
            }
        }

        fetchDataUsers();
    }, [TOKEN, AUTH, PATH, get]);

    useEffect(() => {
        setSortedInfo(info);
        setAmount(info.length);
    }, [info])

    useEffect(() => {
        switch (sortType) {
            case 'description':
                const sortedData = [...sortedInfo];
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
                setSortedInfo(sortedData);
                break;
            case 'descriptionSWAP':
                const sortedData11 = [...sortedInfo];
                sortedData11.sort((b, a) => a.title.localeCompare(b.title));
                setSortedInfo(sortedData11);
                break;
            case 'lesson':
                const sortedData2 = [...sortedInfo];
                console.log(sortedData2);
                sortedData2.sort((a, b) => a.expectedNumberOfLessonsPerMonth - b.expectedNumberOfLessonsPerMonth);
                setSortedInfo(sortedData2);
                break;
            case 'lessonSWAP':
                const sortedData22 = [...sortedInfo];
                sortedData22.sort((b, a) => a.expectedNumberOfLessonsPerMonth - b.expectedNumberOfLessonsPerMonth);
                setSortedInfo(sortedData22);
                break;
            case 'created':
                const sortedData5 = [...sortedInfo];
                sortedData5.sort((a, b) => a?.created?.localeCompare(b?.created));
                setSortedInfo(sortedData5);
                break;
            case 'createdSWAP':
                const sortedData55 = [...sortedInfo];
                sortedData55.sort((b, a) => a?.created?.localeCompare(b?.created));
                setSortedInfo(sortedData55);
                break;
            default:
                break;
        }
    }, [sortType, info]);

    useEffect(() => {
        setSortedInfo(info);
        setSortedInfo((prev) => prev.filter((obj) => {
            return (
                obj.title.toLowerCase().includes(filter.toLowerCase()) ||
                obj.expectedNumberOfLessonsPerMonth.toString().includes(filter) ||
                obj?.created?.includes(filter)
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
        <>
            <HeaderAdd title={`View ${amount} groups`} get={get} />
            <div className={c.listCont}>
                <div className={c.main}>
                    <div className={c.headerTable}>
                        <select value={type} onChange={(e) => setType(e.target.value)} className={c.select}>
                            <option onClick={() => setStatus('active')}>Active only</option>
                            <option onClick={() => setStatus('archived')}>Archived only</option>
                            <option onClick={() => setStatus('')}>All</option>
                        </select>
                        <input className={c.input} type="text" placeholder="Search..." value={filter} onChange={(e) => { setFilter(e.target.value) }} />
                    </div>
                    <table className={c.table}>
                        <tr>
                            <th onClick={() => setSortType(sortType === 'description' ? 'descriptionSWAP' : 'description')}>DESCRIPTION</th>
                            <th onClick={() => setSortType(sortType === 'lesson' ? 'lessonSWAP' : 'lesson')}>LESSON COUNT</th>
                            <th onClick={() => setSortType(sortType === 'created' ? 'createdSWAP' : 'created')}>CREATED</th>
                        </tr>
                        {sortedInfo[0] && sortedInfo.map((obj) => {
                            if (obj.status === status || !status) {
                                return (<tr>
                                    <td>{obj.title}</td>
                                    <td>{obj.expectedNumberOfLessonsPerMonth}</td>
                                    <td>{obj.created}</td>
                                </tr>)
                            }
                            return null;
                        })

                        }
                    </table>
                </div>
            </div>
        </>
    )
}