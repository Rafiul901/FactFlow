import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Banner from './Banner';
import Footer from './Footer';
import Extra from './Extra';
import Section1 from './Section1';
import Section2 from './Section2';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Extra></Extra>
            <Section1></Section1>
            <Section2></Section2>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;