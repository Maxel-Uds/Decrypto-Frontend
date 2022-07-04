import React from 'react';
import './Anchor.css';

export default function anchor(props) {
    return (
        <a className="link" href={props.path} target="_blank" rel="noopener noreferrer">
            <i className={props.icon}></i> {props.label}
        </a>
    );
}