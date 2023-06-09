import React from 'react';
import s from './MyProject.module.scss'

type MyProjectPropsType = {
    style: { backgroundImage: string; }
    title: string
}

export const MyProject: React.FC<MyProjectPropsType> = ({style, title}) => {
    return (
        <div className={s.myProject}>
            {/*<div className={s.imgContainer} style={style}>*/}
                <a className={s.imgContainer} style={style} href=""></a>
            {/*</div>*/}
            <h3 className={s.projectTitle}>{title}</h3>
        </div>
    );
};