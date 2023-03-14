import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Typescript'} description={'is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'}/>
                    <Skill title={'React'} description={'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'}/>
                    <Skill title={'Redux'} description={'is a library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application'}/>
                </div>
            </div>
        </div>
    );
};