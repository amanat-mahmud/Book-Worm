import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import MyBuyers from "../../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import MyWishList from "../../Pages/DashBoard/MyWishList/MyWishList";
import Welcome from "../../Pages/DashBoard/Welcome/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Loader from "../../Pages/Shared/Loader/Loader";
import SignUp from "../../Pages/SignUp/SignUp";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
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
                path:"/dashboard",
                element:<Welcome></Welcome>
            },
            {
                path:"/dashboard/myorders",
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute> 
            },
            {
                path:"/dashboard/mywishlist",
                element:<BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path:"/dashboard/addproduct",
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute> 
            },
            {
                path:"/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:"/dashboard/mybuyers",
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
        ]
    }
    
])
// export default router