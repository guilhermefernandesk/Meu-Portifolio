import React from "react";
import '../Header/Header.css'


const Header = () => {
    return (
        <header>
            <nav>
                <h1 className="logo">
                    <a href="/#" id="inicio"> Guilherme Fernandes</a>
                </h1>
                <a className="item-direita" href="#projetos">Projetos</a>
                <a className="item-direita" href="#sobre">Sobre</a>
                <a className="item-direita" href="#contato">Contato</a>
            </nav>
        </header>
    );
};

export default Header;