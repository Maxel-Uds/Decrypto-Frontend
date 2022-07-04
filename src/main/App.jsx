import React from 'react';
import Nav from '../components/templates/Nav';
import Logo from '../components/templates/Logo';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/templates/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/js/dist/dropdown';
import './App.css';

export default function app(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo/>
                <Nav/>
                <Routes/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}