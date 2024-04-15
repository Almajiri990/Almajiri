import React from "react";
import Icon from "react-icon";
import {NavLinks} from "react-router-dom"

const NavLinks = ({to, children, icon}) => {
    return (
        <NavLinks className="navlink active" to={to}>
         <div>
            <span> {Icon}</span>
            <span> {children}</span>
         </div>
        </NavLinks>
    )

    

}


export default NavLinks