import React from 'react';
import Nav from '../components/templates/Nav';
import Logo from '../components/templates/Logo';
import Home from '../components/Home/Home';
import Footer from '../components/templates/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

export default function app(props) {
    return (
        <div className="app">
            <Logo/>
            <Nav/>
            <Home/>
            <Footer/>
        </div>
    );
}