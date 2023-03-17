import React from 'react';
import s from './MyProject.module.css'

export const MyProject = (props) => {
    return (
        <div className={s.myProject}>
            <div className={s.imgContainer}>
                <a className={s.nav} href="">Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};