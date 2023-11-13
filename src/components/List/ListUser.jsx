import React, { useEffect, useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './List.module.css';
import { getUsers } from '../../function/getUsers';

export const ListUser = ({ get }) => {


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
                const response = await getUsers(PATH, TOKEN, AUTH);
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
    }, [info]);

    useEffect(() => {
        switch (sortType) {
            case 'first':
                const sortedData = [...sortedInfo];
                sortedData.sort((a, b) => a?.firstname?.localeCompare(b?.firstname));
                setSortedInfo(sortedData);
                break;
            case 'firstSWAP':
                const sortedData11 = [...sortedInfo];
                sortedData11.sort((b, a) => a?.firstname?.localeCompare(b?.firstname));
                setSortedInfo(sortedData11);
                break;
            case 'last':
                const sortedData2 = [...sortedInfo];
                sortedData2.sort((a, b) => a?.lastname?.localeCompare(b?.lastname));
                setSortedInfo(sortedData2);
                break;
            case 'lastSWAP':
                const sortedData22 = [...sortedInfo];
                sortedData22.sort((b, a) => a?.lastname?.localeCompare(b?.lastname));
                setSortedInfo(sortedData22);
                break;
            case 'mobile':
                const sortedData3 = [...sortedInfo];
                sortedData3.sort((a, b) => a?.phoneNumber?.localeCompare(b?.phoneNumber));
                setSortedInfo(sortedData3);
                break;
            case 'mobileSWAP':
                const sortedData33 = [...sortedInfo];
                sortedData33.sort((b, a) => a?.phoneNumber?.localeCompare(b?.phoneNumber));
                setSortedInfo(sortedData33);
                break;
            case 'email':
                const sortedData4 = [...sortedInfo];
                sortedData4.sort((a, b) => a?.email?.localeCompare(b?.email));
                setSortedInfo(sortedData4);
                break;
            case 'emailSWAP':
                const sortedData44 = [...sortedInfo];
                sortedData44.sort((b, a) => a?.email?.localeCompare(b?.email));
                setSortedInfo(sortedData44);
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
                obj?.firstname?.toLowerCase().includes(filter.toLowerCase()) ||
                obj?.lastname?.toLowerCase().includes(filter.toLowerCase()) ||
                obj?.email?.toLowerCase().includes(filter.toLowerCase()) ||
                obj?.phoneNumber?.includes(filter) ||
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
            <HeaderAdd title={`View ${amount} users`} get={get} />
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
                            <th onClick={() => setSortType(sortType === 'first' ? 'firstSWAP' : 'first')}>FIRST</th>
                            <th onClick={() => setSortType(sortType === 'last' ? 'lastSWAP' : 'last')}>LAST</th>
                            <th onClick={() => setSortType(sortType === 'email' ? 'emailSWAP' : 'email')}>EMAIL</th>
                            <th onClick={() => setSortType(sortType === 'mobile' ? 'mobileSWAP' : 'mobile')}>MOBILE PHONE</th>
                            <th onClick={() => setSortType(sortType === 'created' ? 'createdSWAP' : 'created')}>CREATED</th>
                        </tr>
                        {sortedInfo[0] && sortedInfo.map((obj) => {
                            if (obj.status === status || !status) {
                                return (<tr>
                                    <td>{obj.firstname}</td>
                                    <td>{obj.lastname}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phoneNumber}</td>
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
