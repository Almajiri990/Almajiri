import React from "react";
import { NavLink } from "react-router-dom";
import './links.css'

const Links = ({label, to, icon}) => {
    return (
        <NavLink id='link' to={to}>
            <span>{icon}</span>
            <span>{label}</span>
        </NavLink>
    )
}


export default Links


