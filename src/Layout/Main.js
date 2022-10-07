import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../components/About/About';
import Friends from '../components/Friends/Friends';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Products from '../components/Products/Products';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                <Home></Home>
                <Products></Products>
                <About></About>
                <Friends></Friends>
            </Outlet>
        </div>
    );
};

export default Main;