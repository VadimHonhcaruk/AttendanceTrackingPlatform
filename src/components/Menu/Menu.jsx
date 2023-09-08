import React from 'react';
import c from './Menu.module.css';
import { Button } from '../Button/Button';

export const Menu = ({ setPage }) => {
    return (
        <div className={c.menuCont}>
            <Button tag='Calendar' onclick={() => { setPage(3) }} classN={c.butt} />
            <Button tag='Profile' onclick={() => { setPage(2) }} classN={c.butt} />
            <Button tag='Create' onclick={() => { }} classN={c.butt} />
            <Button tag='Exit' onclick={() => { setPage(1) }} classN={c.butt} />
        </div>
    )
}
