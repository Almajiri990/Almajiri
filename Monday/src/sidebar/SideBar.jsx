import React from 'react'
import "./sidebar.css"
import NavLinks from '../Components/naivgation/navlinks/NavLinks'
import {FatHome} from "react-icon/fa"
import {AiOutlineSetting} from "react-icon/ai"

const links = [
    {to: "/",icon: <FatHome/>, label: "Home", id: 1},
    {to: "/users",icon: <FatUser/>, label: "Users", id: 2},
    {to: "/settings", icon: <AiOutlineSetting/>, label: "Settings", id: 3},
]

const SideBar = () => {
    return(
        <div id="side wrapper">
        <div id= "links">
        {
            links.map(({to, icon, label, id}) =>{
                
            }
            )
        }
            <NavLinks to={"/"}> Home</NavLinks>
        </div>
        </div>
    )
}

export default SideBar