import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Banner from './Banner';
import Footer from './Footer';



const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            

            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;