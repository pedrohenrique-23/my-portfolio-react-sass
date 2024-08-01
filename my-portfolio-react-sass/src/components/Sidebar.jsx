import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Pedro Henrique" />
            <p className="title">Desenvolvedor Front-end</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">Download Currículo</a>
        </aside>
    )
}

export default Sidebar
