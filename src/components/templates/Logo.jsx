import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import './Logo.css';

export default function logo(props) {
    return (
        <aside className="logo">
            <img src={Logo} alt="logo"/>
        </aside>
    );
}