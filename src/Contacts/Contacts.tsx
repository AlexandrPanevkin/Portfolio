import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBox}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title name={'Contact me'}/>
                <form className={s.contactsForm}>
                    <input className={s.contactsFormInput} type="text"/>
                    <input className={s.contactsFormInput} type="text"/>
                    <textarea className={s.contactsFormTextarea}></textarea>
                </form>
                <span className={s.buttonBox}>
                    <button className={s.button}>Send</button>
                </span>
            </div>
        </div>
    );
};