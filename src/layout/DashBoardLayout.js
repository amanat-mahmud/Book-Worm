import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SideBar from '../Pages/DashBoard/SideBar/SideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SideBar></SideBar>

        </div>
    );
};

export default DashBoardLayout;