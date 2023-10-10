import React from 'react';
import classes from './CalendarGrid.module.css'

export default function CalendarGrid({ update, choosenDay, setChoosenDay, startDay, today, attendanceList }) {
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    const isCurrentMonth = (day) => today.isSame(day, 'month');
    return (
        <div className={classes.calendarGrid}>
            {daysArray.map((dayItem) =>
                <div onClick={() => setChoosenDay(dayItem.format('YYYY-M-D'))} key={dayItem.unix()} className={`${classes.cell} ${isCurrentMonth(dayItem) ? '' : classes.cellNotCurrentMonth} ${choosenDay === dayItem.format('YYYY-M-D') ? classes.cellChoosenDay : ''}`}>
                    <div className={classes.cellHeader}>
                        <div>{dayItem.format('D')}</div>
                        <div>{dayItem.format('dd')}</div>
                    </div>
                    <div className={classes.eventsList}>
                        {attendanceList[0] && attendanceList.filter(attendance => attendance.attendanceDate === dayItem.format('YYYY-M-D')).map((attendance, index) => (
                            <div key={index} className={classes.event}>
                                <div className={classes.present}>P: {attendance.present}</div>
                                <div className={classes.absent}>A: {attendance.absent}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
