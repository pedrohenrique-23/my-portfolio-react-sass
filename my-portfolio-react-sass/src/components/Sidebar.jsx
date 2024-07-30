import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Pedro Henrique" />
            <p className="title">Desenvolvedor Front-end</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download Currículo</a>
        </aside>
    )
}

export default Sidebar
