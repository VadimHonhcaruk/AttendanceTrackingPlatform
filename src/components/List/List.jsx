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


    useEffect(() => {
        async function fetchDataStudents() {
            const response = await getStudents(PATH, TOKEN, AUTH);
            const data = await response.json();
            setInfo(data);
        }

        async function fetchDataRepresentive() {
            const response = await getRepresentive(PATH, TOKEN, AUTH);
            const data = await response.json();
            setInfo(data);
        }

        if (get === 'students') {
            fetchDataStudents();
        } else {
            fetchDataRepresentive();
        }
    }, [TOKEN, AUTH, PATH, get])


    return (
        <div>
            <HeaderAdd title='Student List' />
            <div className={c.listCont}>
                <div className={c.main}>
                    <table className={c.table}>
                        <col />
                        <col />
                        <col />
                        <col />
                        <tr>
                            <th>FIRST</th>
                            <th>LAST</th>
                            <th>EMAIL</th>
                            <th>MOBILE PHONE</th>
                        </tr>
                        {info[0] && info.map((obj) => {
                            return (<tr>
                                <td>{obj.firstname}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.email}</td>
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
