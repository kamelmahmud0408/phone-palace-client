import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Sheared/Navbar/Navbar';
import Footer from '../pages/Sheared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;