import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';

const RootLayout = () => {
    return (
         <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
    );
};

export default RootLayout;