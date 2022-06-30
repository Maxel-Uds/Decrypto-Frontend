import React from 'react';
import './Header.css';

export default function header(props) {
    return (
        <header className="header d-none d-sm-flex flex-column">
            <h1><i className="fa fa-home"> Início</i></h1>
            <p className="lead text-muted">Bem vindo a Decrypto! Codifique e decodifique mensagens por segurança ou diversão</p>
        </header>
    );
}