import React from 'react';
import Link from './Link';
import Anchor from './Anchor';
import './Nav.css';

export default function nav(props) {
    return (
        <aside className="menu">
            <hr/>
            <nav className="links d-none d-xl-grid">            
                <Link path="/" icon="fa fa-home" label="Início"/>
                <Link path="/code" icon="fa fa-lock" label="Codificar Mensagem"/>
                <Link path="/decode" icon="fa fa-unlock-alt" label="Decodificar Mensagem"/>
                <Anchor path="https://github.com/Maxel-Uds/Decrypto-backend" icon="fa fa-github" label="Repositório da API"/>
                <Anchor path="https://the-encryptor.herokuapp.com/swagger-ui.html#/" icon="fa fa-book" label="Documentação"/>
                <Anchor path="https://www.linkedin.com/in/maxel-udson-b7b65b203/" icon="fa fa-address-card" label="Autor"/>
            </nav>

            <nav className="drop d-flex d-xl-none px-3 py-1">    
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link path="/" icon="fa fa-home" label="Início"/></li>
                    <li><Link path="/code" icon="fa fa-lock" label="Codificar Mensagem"/></li>
                    <li><Link path="/decode" icon="fa fa-unlock-alt" label="Decodificar Mensagem"/></li>
                    <li><Anchor path="https://github.com/Maxel-Uds/Decrypto-backend" icon="fa fa-github" label="Repositório da API"/></li>
                    <li><Anchor path="https://the-encryptor.herokuapp.com/swagger-ui.html#/" icon="fa fa-book" label="Documentação"/></li>
                    <li><Anchor path="https://www.linkedin.com/in/maxel-udson-b7b65b203/" icon="fa fa-address-card" label="Autor"/></li>
                </ul>
            </nav>
        </aside>
    );
}