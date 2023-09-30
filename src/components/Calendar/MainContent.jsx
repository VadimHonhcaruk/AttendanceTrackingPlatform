import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import Header from './Header';
import classes from './MainContent.module.css';
import moment from 'moment/moment';
import { HeaderAdd } from '../Header/HeaderAdd';
import { AttendanceCheck } from './AttendanceCheck';

export function MainContent() {

    const [modalVisible, setModalVisible] = useState(false);
    const [editing, setEditing] = useState(false);

    moment.updateLocale('en', { week: { dow: 1 } });
    const [today, setToday] = useState(() => {
        const todaymoment = moment();
        if (localStorage.getItem('today')) {
            const localStorageToday = JSON.parse(localStorage.getItem('today'));
            todaymoment.set('year', localStorageToday.slice(0, 4));
            todaymoment.set('month', localStorageToday.slice(5, 7) - 1);
        }
        return todaymoment;
    });

    const [eventsList, setEventsList] = useState(localStorage.getItem('eventsList') ? JSON.parse(localStorage.getItem('eventsList')) : []);

    useEffect(() => {
        localStorage.setItem('today', JSON.stringify(today));
    }, [today]);

    useEffect(() => {
        localStorage.setItem('eventsList', JSON.stringify(eventsList));
    }, [eventsList]);

    const startDay = today.clone().startOf('month').startOf('week');

    const previous = () => {
        setToday(prev => prev.clone().subtract(1, 'month'));
    }

    const next = () => {
        setToday(prev => prev.clone().add(1, 'month'));
    }

    const [currentEvent, setCurrentEvent] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return (
        <>
            <HeaderAdd title='Attendance' />
            <div className={classes.flex}>
                <div className={classes.mainContent}>
                    <Header
                        previous={previous}
                        next={next}
                        today={today}
                        setToday={setToday}
                    />
                    <CalendarGrid setTitle={setTitle} setDescription={setDescription} setDate={setDate} setTime={setTime} startDay={startDay} today={today} eventsList={eventsList} setCurrentEvent={setCurrentEvent} setModalVisible={setModalVisible} setEditing={setEditing} />
                </div>
                <AttendanceCheck email='vadimhonc@gmail.com' />
                {/* <Modal
                    setModalVisible={setModalVisible}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    eventList={eventsList}
                    setEventList={setEventsList}
                    currentEvent={currentEvent}
                    setCurrentEvent={setCurrentEvent}
                    setEditing={setEditing}
                    editing={editing}
                /> */}
            </div>
        </>
    )
}