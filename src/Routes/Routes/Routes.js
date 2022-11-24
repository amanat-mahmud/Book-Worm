import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
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
    
])
// export default router