import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Admin from "./pages/Admin.jsx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/user",
                element: <Users/>
            },
            {

                path: "/admin",
                element: <Admin/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            // {
            //     path: "/login",
            //     element: <Login />
            // },
            {
                path: "a",
                element: "page not Found" 
            }
        ]
    }




])









export default router