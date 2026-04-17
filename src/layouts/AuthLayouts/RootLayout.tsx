import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/footer/Footer';

const RootLayout = () => {
    return (
        <div className="bg-[#0F172A] min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-grow">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;