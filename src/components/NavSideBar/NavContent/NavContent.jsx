import React from 'react';
import c from './NavContent.module.css'
import { NavOption } from './NavOption/NavOption';
import board from '../../../images/board.svg';
import check from '../../../images/check.svg';
import classes from '../../../images/classes.svg';
import parents from '../../../images/parents.svg';
import students from '../../../images/students.svg';
import users from '../../../images/users.svg';

export const NavContent = () => {
    return (
        <div className={c.navCont}>
            <NavOption text='Dashboard' src={board} link='dashboard' />
            <NavOption text='Take Attendance' src={check} link='attendance' />
            <NavOption text='Students' src={students} link='students' />
            <NavOption text='Classes' src={classes} link='classes' />
            <NavOption text='Parents' src={parents} link='parents' />
            <NavOption text='Users' src={users} link='users' />
        </div>
    )
}
