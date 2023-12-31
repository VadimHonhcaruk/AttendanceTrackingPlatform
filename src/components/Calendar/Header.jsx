import React from 'react';
import classes from './Header.module.css';

export default function Header({ previous, next, today, setToday }) {

    return (
        <header className={classes.header}>
            <div className={classes.title}>
                <div className={classes.changer} onClick={previous}>&lt;</div>
                <div className={classes.month}>{today.format('MMMM YYYY').toUpperCase()}</div>
                <div className={classes.changer} onClick={next}>&gt;</div>
            </div>
        </header>
    )
}
