import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
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
                path:'/category/:id',
                element:<>Hi</>
            },
            {
                path:'/login',
                element:<>Hi</>
            },
            {
                path:'/signup',
                element:<>Hi</>
            },
        ],
        errorElement:<ErrorPage></ErrorPage>
    },
    
])
// export default router