import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import './Logo.css';

export default function logo(props) {
    return (
        <aside className="logo p-2">
            <img src={Logo} alt="logo"/>
        </aside>
    );
}