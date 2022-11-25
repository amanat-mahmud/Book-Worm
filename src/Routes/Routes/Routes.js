import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/advertised',
                element:<>Advertised</>
            },
            {
                path:'/category/:id',
                element:<>Hi</>
            },
            
        ],
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path:"/dashboard/test",
                element:<>Yest</>
            }
        ]
    }
    
])
// export default router