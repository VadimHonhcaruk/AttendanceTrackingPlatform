import React, { useState } from 'react';
import c from './Profile.module.css';
import { HeaderAdd } from '../Header/HeaderAdd';
import info from '../../images/info.svg';
import trash from '../../images/trash.svg';
import team from '../../images/team.svg';
import user from '../../images/users.svg';
import money from '../../images/money.svg';
import representative from '../../images/parent.svg';
import { Info } from './Info/Info';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const ProfileGroup = ({ setModalPrice }) => {

    const navigate = useNavigate();

    const [edit, setEdit] = useState(false);
    const [editPrice, setEditPrice] = useState(false);
    const [price, setPrice] = useState(240);
    const [editRate, setEditRate] = useState(false);
    const [rate, setRate] = useState(240);
    const [title, setTitle] = useState('GROUP 2');
    const [created, setCreated] = useState('2018-12-12');
    const [status, setStatus] = useState('Active');

    return (
        <>
            <HeaderAdd title={title} />
            <div className={c.cont}>
                <div className={c.main}>
                    <div className={c.personal}>
                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.infoColor}>
                                <img alt='info' src={info} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>GROUP INFO</p>
                                    <Button tag='Edit' onclick={() => { setEdit(prev => !prev) }} />
                                </div>
                                <div className={c.infoIn}>
                                    <Info what='TITLE' when={title} edit={edit} editingFunc={setTitle} />
                                    <Info what='CREATED' when={created} />
                                    <Info what='STATUS' when={status} />
                                </div>
                            </div>
                        </div>

                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.checkColor}>
                                <img alt='info' src={money} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>LESSON PRICE</p>
                                    <Button tag='Set new price' onclick={() => { setModalPrice(prev => !prev) }} />
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th>DATE</th>
                                            <th>PRICE</th>
                                        </tr>
                                        <tr>
                                            <td>2023-11-20</td>
                                            <td>{price}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className={c.flex}>
                            <div className={c.contIcon + ' ' + c.parentColor}>
                                <img alt='info' src={user} className={c.icon}></img>
                            </div>
                            <div className={c.info}>
                                <div className={c.header}>
                                    <p>TEACHERS</p>
                                    <div className={c.flexflex}>
                                        <Button tag='Add' onclick={() => { }} />
                                        <Button classN={c.marginbutt} tag='Edit' onclick={() => { setEditRate(prev => !prev) }} />
                                    </div>
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th>NAME</th>
                                            <th>RATE</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>Vadim Honcharuk</td>
                                            <td>{editRate ? <input className={c.input} value={rate} onChange={(e) => setRate(e.target.value)} /> : rate}</td>
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
                                    <p>STUDENTS</p>
                                    <div className={c.flexflex}>
                                        <Button tag='Add' onclick={() => { }} />
                                        <Button classN={c.marginbutt} tag='Edit' onclick={() => { setEditPrice(prev => !prev) }} />
                                    </div>
                                </div>
                                <div className={c.infoIn}>
                                    <table className={c.table}>
                                        <tr>
                                            <th>NAME</th>
                                            <th>PRICE</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>Vadim Hocharuk</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Olha Sryvanyk</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
                                            <td className={c.trash}>
                                                <img alt='info' src={trash} className={c.icontr}></img>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Vasya Kucheruk</td>
                                            <td>{editPrice ? <input className={c.input} value={price} onChange={(e) => setPrice(e.target.value)} /> : price}</td>
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
                        <div className={c.info + ' ' + c.marg}>
                            <div className={c.header}>
                                <p>ACTIONS</p>
                            </div>
                            <div className={c.infoIn + ' ' + c.flexButt}>
                                <Button classN={c.buttArch} tag='Archive' onclick={() => { }} />
                                <Button classN={c.buttInst} tag='Take attendance' onclick={() => { navigate('/attendance') }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
