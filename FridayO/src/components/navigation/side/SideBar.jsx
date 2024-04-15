import React from "react";
import Links from '../../links/Links'
import { AifillSetting, AiOutlineLogin, AiOutlineHome, AiOutlineUser } from "react-icon/ai"
import { NavLink } from "react-router-dom";
import { MdAi }
import './sidebar.css'

const SideBar = () => {

    const path = [
        { to: "/", label: "Login", icon: <AiOutlineLogin /> },
        { to: "/settings", label: "Settings", icon: <AifillSetting /> },
        { to: "/user", label: "User", icon: <AiOutlineUser /> },
        { to: "/admin", label: "Admin", icon: <AiOutlineAdminPanelSettings /> },
        { to: "/home", label: "Home", icon: <AiOutlineHome /> }

    ]
    return (
        <div id='links'>
            {
                path.map(({ to, label, icon }) => (
                    <link key={label} to={to} label={label} icon={icon}></link>
            ))
            }
        </div>
    )
}

export default SideBar