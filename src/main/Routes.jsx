import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Code from '../components/Code/Code';
import Home from '../components/Home/Home';

export default function routes(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/code" element={<Code/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    );
}