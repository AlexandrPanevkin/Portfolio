import React from 'react';
import s from './Main.module.scss'
import sContainer from './../common/styles/Container.module.css'
import meIMG from '../assets/images/Me.png'

export const Main = () => {

    const Me = {
        backgroundImage: `url(${meIMG})`,
    };
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h1 className={s.name}> I am Alexandr Panevkin</h1>
                    <p className={s.profession}>FRONTEND DEVELOPER</p>
                </div>
                <div className={s.photo}>
                    <img style={Me} className={s.me} alt=""/>
                </div>
            </div>
        </div>
    );
};