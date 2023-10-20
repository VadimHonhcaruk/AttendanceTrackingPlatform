import React, { useEffect, useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './List.module.css';
import { getUsers } from '../../function/getUsers';

export const ListUser = ({ get }) => {


    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [info, setInfo] = useState([]);


    useEffect(() => {
        async function fetchDataUsers() {
            const response = await getUsers(PATH, TOKEN, AUTH);
            const data = await response.json();
            setInfo(data);
        }

        fetchDataUsers();
    }, [TOKEN, AUTH, PATH, get])


    return (
        <div>
            <HeaderAdd title='User List' />
            <div className={c.listCont}>
                <div className={c.main}>
                    <table className={c.table}>
                        <col className={c.th1} />
                        <col className={c.th2} />
                        <col className={c.th3} />
                        <col className={c.th4} />
                        <col className={c.th5} />
                        <tr>
                            <th>FIRST</th>
                            <th>LAST</th>
                            <th>EMAIL</th>
                            <th>TYPE</th>
                            <th>MOBILE PHONE</th>
                        </tr>
                        {info[0] && info.map((obj) => {
                            return (<tr>
                                <td>{obj.firstname}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.email}</td>
                                <td>{obj.usertype}</td>
                                <td>{obj.phoneNumber}</td>
                            </tr>)
                        })

                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
