import React from 'react';
import sContainer from './../common/styles/Container.module.css'
import {MyProject} from "./MyWork/MyProject";
import s from  './MyProjects.module.css'
import socialNetwork from '../assets/images/SocialNetwork.png'
import todolist from '../assets/images/Todolist.jpg'

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.myProjects}>
                    <MyProject img={socialNetwork} title={'Social Network'} description={'React, Redux, TypeScript, Axios, Redux-thunk, React-Router-dom'}/>
                    <MyProject img={todolist} title={'Todolist'} description={'React, Redux, TypeScript, Formik, MUI, Axios,Redux-thunk, React-Router-dom.'}/>
                </div>
            </div>
        </div>
    );
};