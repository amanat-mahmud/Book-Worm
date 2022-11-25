import React from 'react';
import DashNav from '../Pages/DashBoard/DashNav/DashNav';
import SideBar from '../Pages/DashBoard/SideBar/SideBar';

const DashBoardLayout = () => {
    return (
        <div>
            <DashNav></DashNav>
            <SideBar></SideBar>

        </div>
    );
};

export default DashBoardLayout;