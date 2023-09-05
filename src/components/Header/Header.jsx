import React from 'react';
import c from "./Header.module.css";
import { Photo } from '../Photo/Photo';

export const Header = ({ name, photo }) => {
    return (
        <div className={c.header}>
            <div className={c.flex}>
                <p className={c.name}>{name}</p>
                <p className={c.who}>Member profile</p>
            </div>
            <div className={c.photo}>
                <Photo photo={photo} />
            </div>
        </div>
    )
}
