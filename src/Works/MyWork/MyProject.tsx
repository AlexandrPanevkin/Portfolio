import React from 'react';
import s from './MyProject.module.css'

type MyProjectPropsType = {
    img: string
    title: string
    description: string
}

export const MyProject = (props: MyProjectPropsType) => {
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