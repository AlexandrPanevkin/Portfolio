import React from 'react';
import sContainer from './../common/styles/Container.module.css'
import {MyProject} from "./MyWork/MyProject";
import s from './MyProjects.module.css'
import socialNetwork from '../assets/images/SocialNetwork.png'
import todolist from '../assets/images/Todolist.jpg'
import {Title} from "../common/components/title/Title";

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
             <Title name={'My projects'}/>
                <div className={s.myProjects}>
                    <MyProject img={socialNetwork} title={'Social Network'}
                               description={'React, Redux, TypeScript, Axios, Redux-thunk, React-Router-dom'}/>
                    <MyProject img={todolist} title={'Todolist'}
                               description={'React, Redux, TypeScript, Axios, Redux-thunk, React-Router-dom'}/>
                </div>
            </div>
        </div>
    );
};