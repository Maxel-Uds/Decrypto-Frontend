import React from 'react';
import Main from '../templates/Main';

export default function home(props) {
    return (
        <Main title="Início" subtitle="Bem vindo a Decrypto! Codifique e decodifique mensagens por segurança ou diversão" icon="fa fa-home">
            <h1 className="display-4">Bem Vindo ao Decrypto!</h1>
            <hr/>
            <p className="lead p-1">Aqui você encontrará um meio seguro e eficiente de criptografar suas mensagens com um simples clique!</p>
            <span className="lists">
                <span className="left">
                    <p className="lead mb-1">Para codificar uma mensagem:</p>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">Entre na aba "Codificar Mensagem"</li>
                        <li className="list-group-item">Escolha uma senha segura para codificar a mensagem</li>
                        <li className="list-group-item">Digite sua mensagem</li>
                        <li className="list-group-item">Salve o hash e o id que foram gerados em um local seguro</li>
                    </ol>
                </span>

                <span className="right">
                    <p className="lead mb-1">Para decodificar uma mensagem:</p>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">Entre na aba "Decodificar Mensagem"</li>
                        <li className="list-group-item">Digite a senha escolhida anteriormente para codificar a mensagem</li>
                        <li className="list-group-item">Cole o hash da mensagem que foi gerado anteriomente</li>
                        <li className="list-group-item">Receba o conteúdo da mensagem enviado à você</li>
                    </ol>
                </span>
            </span>
        </Main>
    );
}