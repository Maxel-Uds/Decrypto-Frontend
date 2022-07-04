import React from 'react';
import Link from './Link';
import Anchor from './Anchor';
import './Nav.css';

export default function nav(props) {
    return (
        <aside className="menu">
            <hr/>
            <nav className="links">            
                <Link path="/" icon="fa fa-home" label="Início"/>
                <Link path="/code" icon="fa fa-lock" label="Codificar Mensagem"/>
                <Link path="/decode" icon="fa fa-unlock-alt" label="Decodificar Mensagem"/>
                <Anchor path="https://github.com/Maxel-Uds/Decrypto-backend" icon="fa fa-github" label="Repositório da API"/>
                <Anchor path="https://the-encryptor.herokuapp.com/swagger-ui.html#/" icon="fa fa-book" label="Documentação"/>
                <Anchor path="https://www.linkedin.com/in/maxel-udson-b7b65b203/" icon="fa fa-address-card" label="Autor"/>
            </nav>
        </aside>
    );
}