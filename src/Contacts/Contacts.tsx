import React from 'react';
import s from './Contacts.module.scss'
import sContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import cmputerManIMG from "../assets/images/ComputerMan.jpg";

export const Contacts = () => {
    const ComputerMan = {
        backgroundImage: `url(${cmputerManIMG})`,
    };

    return (
        <div className={s.contactsBox} style={ComputerMan}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title name={'Contact me'}/>
                <form className={s.contactsForm}>
                    <input placeholder={'Your name'} className={s.contactsFormInput} type="text"/>
                    <input placeholder={'Your email'} className={s.contactsFormInput} type="text"/>
                    <textarea placeholder={'Your message'} className={s.contactsFormTextarea}></textarea>
                </form>
                <span className={s.buttonBox}>
                    <button className={s.button}>Submit request</button>
                </span>
            </div>
        </div>
    );
};