import React from "react";
import Header from "../../Components/Header/Header";
import '../Home/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Cards from "../../Components/Cards/Cards";
import { Projetos } from "../../Projetos/Projetos";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



function Home() {
    const MostraCards = Projetos.map(cards => (
        <Cards key={cards.id} cards={cards} />
    ));
    return (
        <div>
            <Header />
            <div className="container">
                <img className="foto-perfil" src="https://i.ibb.co/9nFzF5s/Design-sem-nome-1.png" alt="perfil" />
                <h1 className="titulos-primarios">Guilherme Fernandes</h1>
                <p className="titulos-secundarios">Graduando em Engenharia Eletrônica - Desenvolvedor Front-End</p>
                <div className="row-container">
                    <p className="titulos-secundarios">Contatos: </p>
                    <a className="icones" href="https://www.linkedin.com/in/iguilherme"><LinkedInIcon /></a>
                    <a className="icones" href="https://github.com/guilhermefernandesk"><GitHubIcon /></a>
                    <a className="icones" href="https://www.instagram.com/gui.fernandes7"><InstagramIcon /></a>
                    <a className="icones" href="https://wa.me/5512988640943"><WhatsAppIcon /></a>
                </div>
            </div>
            <h1 className="titulos-primarios projeto" id="projetos">PROJETOS</h1>
            <div className="cards">
                <div className="grid-container">
                    {MostraCards}
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', padding: '64px 32px' }} id="sobre">
                <h2 className="projeto" style={{ color: 'black' }}>SOBRE MIM</h2>
                <p className="titulos-secundarios" style={{ width: '76%', textAlign: 'justify' }}>Olá meu nome é Guilherme. Sou formado em Técnico Automação
                    Industrial. Graduando em Engenharia Eletrônica na Universidade Federal de Itajubá
                    (UNIFEI). Possuo interesse na área de programação front-end, na qual estou estudando
                    atualmente.
                </p>
            </div>
            <div style={{ justifyContent: 'center', display: 'flex' }} id="contato">
                <h3>Disponível para oportunidades</h3>
            </div>
            <div className="containers">
                <div className="email">
                    <a href="mailto:guilhermefernandes1937g@gmail.com">
                        <h4>guilhermefernandes1937g@gmail.com</h4>
                    </a>
                </div>
                <div className="button-container">
                    <a href="#inicio">
                        <button className="btn-direita">
                            <KeyboardDoubleArrowUpIcon />
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};
export default Home;