import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Advertised from "../../Pages/Advertised/Advertised";
import Category from "../../Pages/Category/Categories";
import OneCategoryPage from "../../Pages/Category/OneCategoryPage";
import AllBuyer from "../../Pages/DashBoard/Admin/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/Admin/AllSeller/AllSeller";
import Reported from "../../Pages/DashBoard/Admin/Reported/Reported";
import MyOrders from "../../Pages/DashBoard/Buyer/MyOrders/MyOrders";
import MyWishList from "../../Pages/DashBoard/Buyer/MyWishList/MyWishList";
import Payment from "../../Pages/DashBoard/Buyer/Payment/Payment";
import AddProduct from "../../Pages/DashBoard/Seller/AddProduct/AddProduct";
import MyBuyers from "../../Pages/DashBoard/Seller/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/DashBoard/Seller/MyProducts/MyProducts";
import Welcome from "../../Pages/DashBoard/Welcome/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/advertised',
                element: <BuyerRoute><Advertised></Advertised></BuyerRoute>
            },
            {
                path: '/categories',
                element: <BuyerRoute><Category></Category></BuyerRoute>
            },
            {
                path: '/category/:name',
                element: <BuyerRoute><OneCategoryPage></OneCategoryPage></BuyerRoute>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.name}`)
            },

        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Welcome></Welcome></PrivateRoute>
            },
            {
                path: "/dashboard/myorders",
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: "/dashboard/mywishlist",
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/mybuyers",
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: "/dashboard/allbuyer",
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: "/dashboard/reported",
                element: <AdminRoute><Reported></Reported></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader:({params})=>fetch(`http://localhost:5000/order/${params.id}`)
            },
        ]
    }

])
// export default router