import React from "react";
import { Outlet } from "react-router-dom";
import './mainlayout.css'


const MainLayout =() => {
    return (
        <div id='layout'>
            <div id='side-nav'>
                <SideBar/>
            </div>
            <div id='display'>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout