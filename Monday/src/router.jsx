
import Home from "./Home"
import Settings from "./Settings"
import Users from "./Users"
import {createBrowserRouter, BrowserRouter, Route} from "react-router-dom"
import SideBar from "./sidebar/SideBar"

<BrowserRouter>
     <SideBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
</BrowserRouter>


const router = createBrowserRouter([
    { 
        path: "/",
        element: <DasboardLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/users",
                element: <Users/>,
            }
        ]

    }



])

export default router