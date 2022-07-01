import React from 'react';
import './Header.css';

export default function header(props) {
    return (
        <header className="header d-none d-xl-flex flex-column">
            <h1><i className={props.icon}> {props.title}</i></h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    );
}