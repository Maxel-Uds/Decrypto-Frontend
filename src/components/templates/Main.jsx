import React, { Fragment } from 'react';
import Header from './Header'
import './Main.css';

export default function main(props) {
    return (
        <Fragment>
            <Header/>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    <h1 className="display-4">Bem Vindo ao Decrypto!</h1>
                    <hr/>
                    <p className="lead mb-0">Aqui você encontrará um meio seguro e eficiente de criptografar suas mensagens com um simples clique!</p>
                </div>
            </main>
        </Fragment>
    );
}