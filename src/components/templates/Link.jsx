import React from 'react'
import { Link } from 'react-router-dom';
import './Link.css';

export default function link(props) {
    return (
        <a href={props.path} className="link">
            <i className={props.icon}></i> {props.label}
        </a>
    );
}