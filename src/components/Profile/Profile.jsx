import React, { useState } from 'react';
import c from './Profile.module.css';
import { HeaderAdd } from '../Header/HeaderAdd';
import info from '../../images/info.svg';
import trash from '../../images/trash.svg';
import representative from '../../images/parent.svg';
import { Info } from './Info/Info';
import { Button } from '../Button/Button';

export const Profile = ({ }) => {

    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState('Вадим');
    const [secondName, setSecondName] = useState('Гончарук');
    const [created, setCreated] = useState('2018-12-12');
    const [status, setStatus] = useState('Active');
    const [bitrh, setBirth] = useState('2003-06-07');
    const [phone, setPhone] = useState('+380983169348');
    const [code, setCode] = useState('ZXCQ57');

    return (
        <>
            <HeaderAdd title={`Vadim Honcharuk`} />
            <div className={c.cont}>
                <div className={c.main}>
                    <div className={c.personal}>
                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.infoColor}>
                                <img alt='info' src={info} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>PERSONAL INFO</p>
                                    <Button tag='Edit' onclick={() => { setEdit(prev => !prev) }} />
                                </div>
                                <div className={c.infoIn}>
                                    <Info what='FIRST NAME' when={firstName} edit={edit} editingFunc={setFirstName} />
                                    <Info what='LAST NAME' when={secondName} edit={edit} editingFunc={setSecondName} />
                                    <Info what='CREATED' when={created} />
                                    <Info what='STATUS' when={status} />
                                    <Info what='BIRTH' when={bitrh} edit={edit} editingFunc={setBirth} />
                                    <Info what='PHONE' when={phone} edit={edit} editingFunc={setPhone} />
                                    <Info what='CODE' when={code} edit={edit} editingFunc={setCode} />
                                </div>
                            </div>
                        </div>
                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.parentColor}>
                                <img alt='info' src={representative} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>REPRESENTATIVE</p>
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th>FIRST</th>
                                            <th>LAST</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>Vadim</td>
                                            <td>Honcharuk</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={c.actions}>
                        <div className={c.action}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
