import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.navText} href="">Home</a>
            <a className={s.navText} href="">Skills</a>
            <a className={s.navText} href="">Projects</a>
            <a className={s.navText} href="">Contacts</a>
        </div>
    );
};