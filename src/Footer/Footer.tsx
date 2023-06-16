import React from 'react';
import sContainer from "../common/styles/Container.module.css";
import s from './footer.module.scss'
import GithubSVG from '../assets/images/Github.svg'
import GmailSVG from '../assets/images/Gmail.svg'
import TelegramSVG from '../assets/images/Telegram.svg'
import LinkedinSVG from '../assets/images/Linkedin.svg'

export const Footer = () => {

    const Github = {
        backgroundImage: `url(${GithubSVG})`,
    };
    const Gmail = {
        backgroundImage: `url(${GmailSVG})`,
    };
    const Telegram = {
        backgroundImage: `url(${TelegramSVG})`,
    };
    const Linkedin = {
        backgroundImage: `url(${LinkedinSVG})`,
    };

    return (
        <div className={s.footerBox}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.footer}>
                    <h3 className={s.text}>Alexandr Panevkin</h3>
                    <div className={s.iconBox}>
                        <div style={Github} className={s.icon}></div>
                        <div style={Gmail} className={s.icon}></div>
                        <div style={Telegram} className={s.icon}></div>
                        <div style={Linkedin} className={s.icon}></div>
                    </div>

                </div>
            </div>
        </div>
    );
};