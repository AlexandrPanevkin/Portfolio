import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./Works/MyProjects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {ReadyForRemote} from "./ReadyForRemote/ReadyForRemote";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <ReadyForRemote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
