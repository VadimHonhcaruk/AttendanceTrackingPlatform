import React from 'react';
import c from './Photo.module.css';

export const Photo = ({ photo }) => {
    return (
        <img alt='member' src={photo} className={c.photo}></img>
    )
}
