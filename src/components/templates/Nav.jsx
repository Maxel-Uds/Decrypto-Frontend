import React from 'react';
import Link from './Link';
import './Nav.css';

export default function nav(props) {
    return (
        <aside className="menu">
            <hr/>
            <nav className="links">            
                <Link path="/" icon="fa fa-home" label="Início"/>
                <Link path="/code" icon="fa fa-lock" label="Codificar Mensagem"/>
                <Link path="/decode" icon="fa fa-unlock-alt" label="Decodificar Mensagem"/>
                <Link path="/" icon="fa fa-github" label="Repositório da API"/>
                <Link path="/" icon="fa fa-book" label="Documentação"/>
                <Link path="/" icon="fa fa-address-card" label="Autor"/>
            </nav>
        </aside>
    );
}