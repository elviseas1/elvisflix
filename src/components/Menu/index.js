import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a>
                <img className="Logo" src={Logo} alt="ElvisFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;