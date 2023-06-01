import React from 'react';
import sContainer from './../common/styles/Container.module.css'
import {MyProject} from "./MyWork/MyProject";
import s from './MyProjects.module.css'
import socialNetworkIMG from '../assets/images/SocialNetwork.png'
import todolistIMG from '../assets/images/Todolist.jpg'
import {Title} from "../common/components/title/Title";

export const MyProjects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkIMG})`,
    };

    const todolist = {
        backgroundImage: `url(${todolistIMG})`,
    };

    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
             <Title name={'My projects'}/>
                <div className={s.myProjects}>
                    <MyProject style={socialNetwork} title={'Social Network'}
                              />
                    <MyProject style={todolist} title={'Todolist'}
                               />
                     </div>
            </div>
        </div>
    );
};