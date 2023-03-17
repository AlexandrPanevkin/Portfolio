import React from 'react';
import sContainer from "../common/styles/Container.module.css";
import s from './footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBox}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.footer}>
                    <h3>Alexandr Panevkin</h3>
                    <div className={s.iconBox}>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                        <div className={s.icon}></div>
                    </div>

                </div>
            </div>
        </div>
    );
};