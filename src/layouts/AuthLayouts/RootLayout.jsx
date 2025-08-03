import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <main style={{minHeight: 'calc(100vh - 130px)'}}>
                <Outlet/>
                <Footer/>
            </main>
        </div>
    );
};

export default RootLayout;