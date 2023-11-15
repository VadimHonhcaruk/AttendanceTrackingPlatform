import React, { useState } from 'react';
import c from './Profile.module.css';
import { HeaderAdd } from '../Header/HeaderAdd';
import info from '../../images/info.svg';
import trash from '../../images/trash.svg';
import team from '../../images/team.svg';
import check from '../../images/checkWhite.svg';
import representative from '../../images/parent.svg';
import { Info } from './Info/Info';
import { Button } from '../Button/Button';

export const Profile = ({ instantSuffix }) => {

    const [edit, setEdit] = useState(false);
    const [editPrice, setEditPrice] = useState(false);
    const [price, setPrice] = useState(240);
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
                                    <Button tag='Add' onclick={() => { }} />
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

                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.teamColor}>
                                <img alt='info' src={team} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>GROUP</p>
                                    <div className={c.flexflex}>
                                        <Button tag='Add' onclick={() => { }} />
                                        <Button classN={c.marginbutt} tag='Edit' onclick={() => { setEditPrice(prev => !prev) }} />
                                    </div>
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th>TITLE</th>
                                            <th>PRICE</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>TR-02</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Vadim Individual</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>XQ2-0</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.checkColor}>
                                <img alt='info' src={check} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>RECENT ATTENDANCE</p>
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th className={c.tdshka}>CLASS</th>
                                            <th className={c.tdshka}>DATE</th>
                                            <th className={c.tdshka}>ATTENDANCE</th>
                                        </tr>
                                        <tr>
                                            <td className={c.tdshka}>TR-02</td>
                                            <td className={c.tdshka}>2023-11-15</td>
                                            <td className={c.tdshka}>Present</td>
                                        </tr>
                                        <tr>
                                            <td className={c.tdshka}>TR-02</td>
                                            <td className={c.tdshka}>2023-11-13</td>
                                            <td className={c.tdshka}>Present</td>
                                        </tr>
                                        <tr>
                                            <td className={c.tdshka}>Vadim Individual</td>
                                            <td className={c.tdshka}>2023-11-11</td>
                                            <td className={c.tdshka}>Absent</td>
                                        </tr>
                                        <tr>
                                            <td className={c.tdshka}>TR-02</td>
                                            <td className={c.tdshka}>2023-11-4</td>
                                            <td className={c.tdshka}>Present</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={c.actions}>
                        <div className={c.info + ' ' + c.marg}>
                            <div className={c.header}>
                                <p>ACTIONS</p>
                            </div>
                            <div className={c.infoIn + ' ' + c.flexButt}>
                                <Button classN={c.buttArch} tag='Archive' onclick={() => { }} />
                                <Button classN={c.buttInst} tag='Create instant group' onclick={() => { }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
