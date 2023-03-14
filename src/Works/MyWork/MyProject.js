import React from 'react';
import s from './MyProject.module.css'

export const MyProject = (props) => {
    return (
        <div className={s.myProject}>
            <img className={s.image} src={props.img}/>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};