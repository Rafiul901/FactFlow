import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Banner from './Banner';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;