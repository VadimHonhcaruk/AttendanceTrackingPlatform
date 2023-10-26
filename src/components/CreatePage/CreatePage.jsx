import React, { useEffect, useState } from 'react';
import { HeaderAdd } from '../Header/HeaderAdd';
import c from './CreatePage.module.css';
import { Input } from './Input';
import { onlyNumb } from '../../function/onlyNumb';
import { limitInputLength } from '../../function/limitInput';
import { inputChange, onblurInput, onfocusInput } from '../../function/phoneInputChange';
import { isValid, parse } from 'date-fns';
import { getGroup } from '../../function/getGroup';
import { getRepresentive } from '../../function/getRepresentive';
import { getStudents } from '../../function/getStudents';
import { isValid as isValidCard } from 'creditcard.js';
import { cardInputChange } from '../../function/cardInput';
import { validate } from 'email-validator';
var validator = require("email-validator");

const now = new Date();

export const CreatePage = ({ email, get }) => {
    const [first, setFirst] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [last, setLast] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);
    const [groups, setGroups] = useState([]);
    const [groupTitle, setGroupTitle] = useState('Add to Classes');
    const [selectedGroups, setSelectedGroups] = useState([]);
    const [card, setCard] = useState('');
    const [representative, setRepresentative] = useState([]);
    const [representativeOption, setRepresentativeOption] = useState('Connect');
    const [selectedRepresentatives, setSelectedRepresentatives] = useState([]);
    const [cardError, setCardError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [emailUser, setEmailUser] = useState('');

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;


    useEffect(() => {
        if (card === '') {
            setCardError(false);
            return;
        }

        if (!isValidCard(card.replace(/\D/g, '')) || (card.length !== 19 && card.length !== 0)) {
            setCardError(true);
        } else {
            setCardError(false);
        }
    }, [card]);

    useEffect(() => {
        if (emailUser === '') {
            setEmailError(false);
            return;
        }

        if (!validator.validate(emailUser)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }, [emailUser]);

    useEffect(() => {
        if (pass === '' || pass2 === '') { setPassError(false); return; };
        if (pass === pass2) {
            setPassError(false)
        } else {
            setPassError(true);
        }
    }, [pass, pass2])

    useEffect(() => {
        const dateStr = `${year}-${month}-${day}`;
        const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
        if (day && month && year.length === 4 && !isValid(parsedDate)) {
            setError(true);
        } else {
            setError(false);
        }
    }, [day, month, year]);

    useEffect(() => {

        async function fetchData() {
            setGroups([]);
            try {
                const response = await getGroup(email, PATH, TOKEN, AUTH);
                const data = await response.json();
                if (!data.message) {
                    await setGroups(data);
                }
            } catch (error) {
                console.log(error)
            }

        }

        async function fetchDataRepresentive() {
            try {
                const response = await getRepresentive(PATH, TOKEN, AUTH);
                const data = await response.json();
                setRepresentative(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        }

        async function fetchDataStudent() {
            try {
                const response = await getStudents(PATH, TOKEN, AUTH);
                const data = await response.json();
                setRepresentative(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        }

        if (get === 'student') {
            fetchData();
            fetchDataRepresentive();
        } else if (get === 'representetive') {
            fetchDataStudent();
        } else {
            fetchData();
        }
    }, [AUTH, PATH, TOKEN, email, get]);

    const handleGroupSelect = (group) => {
        const groupExists = selectedGroups.some((selectedGroup) => selectedGroup.groupId === group.groupId);

        if (!groupExists) {
            setSelectedGroups(prev => [...prev, group]);
        }
    };

    const handleGroupRemove = (group) => {
        const updatedGroups = selectedGroups.filter((selectedGroup) => selectedGroup.groupId !== group.groupId);
        setSelectedGroups(updatedGroups);
    };

    const handleRepSelect = (rep) => {
        const repExists = selectedRepresentatives.some((selectedRep) => selectedRep.id === rep.id);

        if (!repExists) {
            setSelectedRepresentatives(prev => [...prev, rep]);
        }
    };

    const handleRepRemove = (rep) => {
        const updatedRep = selectedRepresentatives.filter((selectedRep) => selectedRep.id !== rep.id);
        setSelectedRepresentatives(updatedRep);
    };

    return (
        <>
            <HeaderAdd title={`Create ${get}`} />
            <div className={c.cont}>
                <div className={c.main}>
                    <div className={c.details}>{get.toUpperCase()} DETAILS</div>
                    <div className={c.flexCont}>
                        <div className={c.inputContMain}>
                            <div className={c.flex}>
                                <Input label='First name' name={first} setName={setFirst} pattern="[А-Яа-яЁёІіЇїЄє]+" />
                                <Input label='Last name' name={last} setName={setLast} pattern="[А-Яа-яЁёІіЇїЄє]+" />
                            </div>
                            <div className={c.flex}>
                                <Input label='Day' onInput={onlyNumb} name={day} style={error ? c.day + ' ' + c.error : c.day} setName={setDay} maxLength={2} pattern="^(0?[1-9]|[12]\d|3[01])$" />
                                <div className={c.inputCont}>
                                    <label className={c.label}>Month</label>
                                    <select className={error ? c.input + ' ' + c.error : c.input} value={month} onInput={(e) => { setMonth(e.target.value); }}>
                                        <option value="" hidden></option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <Input type='number' label='Year' style={error ? c.day + ' ' + c.error : c.day} onInput={(e) => { onlyNumb(e); limitInputLength(e); }} maxLength="4" name={year} setName={setYear} min={now.getFullYear() - 100} max={now.getFullYear() - 5} />
                            </div>
                            <div className={c.flex}>
                                <Input label='Phone' name={phone} setName={setPhone} maxLength="19" onfocus={onfocusInput} onBlur={onblurInput} onInput={inputChange} pattern="^\+38\s\(0\d{2}\)\s\d{3}\s\d{2}\s\d{2}$" />
                            </div>
                            {get === 'user' && <>
                                <div className={c.flex}>
                                    <Input style={cardError && c.error} maxLength="19" onInput={cardInputChange} label='Bank card' name={card} setName={setCard} />
                                </div>
                                <div className={c.flex}>
                                    <Input style={emailError && c.error} label='Email' name={emailUser} setName={setEmailUser} />
                                </div>
                                <div className={c.flex}>
                                    <Input style={passError && c.error} label='Password' name={pass} setName={setPass} />
                                    <Input style={passError && c.error} label='Confirm password' name={pass2} setName={setPass2} />
                                </div>
                            </>}
                        </div>
                        <div className={c.select}>
                            {(get === 'student' || get === 'user') && <div className={c.inputCont}>
                                <label className={c.label}>Add to Classes</label>
                                <select className={c.input} value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)}>
                                    <option>Add to Classes</option>
                                    {groups.map(((item) => {
                                        return (
                                            <option onClick={() => handleGroupSelect(item)} key={item.groupId} value={item.title}>{item.groupTitle}</option>
                                        )
                                    }))}
                                </select>
                                <div className={c.groups}>
                                    {selectedGroups.map((selectedGroup) => (
                                        <div className={c.item} onClick={() => handleGroupRemove(selectedGroup)} key={selectedGroup.groupId}>{selectedGroup.groupTitle}<b>&#215;</b> </div>
                                    ))}
                                </div>
                            </div>}
                            {(get === 'student' || get === 'representetive') && <div className={c.inputCont}>
                                <label className={c.label}>Connect with a {get === 'student' ? 'representative' : 'student'}</label>
                                <select className={c.input} value={representativeOption} onChange={(e) => setRepresentativeOption(e.target.value)}>
                                    <option>Connect</option>
                                    {representative.map(((item) => {
                                        return (
                                            <option onClick={() => handleRepSelect(item)} key={item.id} value={item.title}>{item.firstname} {item.lastname}</option>
                                        )
                                    }))}
                                </select>
                                <div className={c.groups}>
                                    {selectedRepresentatives.map((selectedRep) => (
                                        <div className={c.item} onClick={() => handleRepRemove(selectedRep)} key={selectedRep.groupId}>{selectedRep.firstname + ' ' + selectedRep.lastname}<b>&#215;</b></div>
                                    ))}
                                </div>
                            </div>}
                            <div className={c.flexEnd}>
                                <div className={c.butt}>SAVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
