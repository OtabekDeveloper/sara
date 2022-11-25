import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from "../view/home/Home"
import Footer from '../components/footer/Footer';
// import Card from '../components/Card/Card';
// import Carusel from '../components/carusel/Carusel';
import Product from '../view/product/Product';


function Router() {
    return (
        <>
        
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
           
        </>
    )
}

export default Router