import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const RootLayout = () => {
    return (
         <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className='mt-15'><Footer /></div>
    </div>
    );
};

export default RootLayout;