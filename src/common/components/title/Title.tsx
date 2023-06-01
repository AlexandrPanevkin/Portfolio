import React from 'react';
import s from './Title.module.css'

type TitlePropsType = {
    name: string
}

export const Title: React.FC<TitlePropsType> = ({name}) => {
    return (
        <div className={s.title}><h2>{name}</h2></div>
    );
};