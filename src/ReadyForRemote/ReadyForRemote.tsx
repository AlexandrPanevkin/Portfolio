import React from 'react';
import sContainer from './../common/styles/Container.module.css';
import s from './ReadyForRemote.module.scss';
import RemoteIMG from '../assets/images/Remote.png';

export const ReadyForRemote = () => {

    const Remote = {
        backgroundImage: `url(${RemoteIMG})`,
    };


    return (
        <div className={`${sContainer.container} ${s.remoteContainer}`} style={Remote}>
            <h3 className={s.text}>
                I am ready to work remotely
            </h3>
        </div>
    );
};