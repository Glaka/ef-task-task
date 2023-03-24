import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from 'pages/about-us';
import Academic from 'pages/academic';
import Contact from 'pages/contact';
import Home from 'pages/home';
import Lineup from 'pages/lineup';
import Nominations from 'pages/nominations';
import Partners from 'pages/partners';
import Menu from 'shared/components/Menu';

const Root = () => (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/nominations" element={<Nominations />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default Root;
