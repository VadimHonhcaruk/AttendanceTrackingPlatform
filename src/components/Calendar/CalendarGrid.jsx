import React from 'react';
import classes from './CalendarGrid.module.css'

export default function CalendarGrid({ choosenDay, setChoosenDay, setTitle, setDescription, setDate, setTime, startDay, today, eventsList, setCurrentEvent }) {
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    const isCurrentMonth = (day) => today.isSame(day, 'month');
    return (
        <div className={classes.calendarGrid}>
            {daysArray.map((dayItem) =>
                <div onClick={() => setChoosenDay(dayItem.format('YYYY-MM-DD'))} key={dayItem.unix()} className={`${classes.cell} ${isCurrentMonth(dayItem) ? '' : classes.cellNotCurrentMonth} ${choosenDay === dayItem.format('YYYY-MM-DD') ? classes.cellChoosenDay : ''}`}>
                    <div className={classes.cellHeader}>
                        <div>{dayItem.format('D')}</div>
                        <div>{dayItem.format('dd')}</div>
                    </div>
                    <div className={classes.eventsList}>
                        {eventsList.filter(event => event.date === dayItem.format('YYYY-MM-DD')).map((event, index) => (
                            <div key={index} className={classes.event} onClick={() => {
                                setCurrentEvent(event);
                                setTitle(event.title);
                                setDescription(event.description);
                                setDate(event.date);
                                setTime(event.time);
                            }}>
                                {event.title.toUpperCase()}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
