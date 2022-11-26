import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getRole } from '../../../api/getRole';
import { AuthContext } from '../../../context/AuthProvider';

const SideBar = () => {
    const { user, userRole, setUserRole } = useContext(AuthContext)
    getRole(user.email).then(res => setUserRole(res));
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100
                    text-base-content">
                    {
                        userRole === "user" ?
                            <><li><NavLink to="/dashboard/myorders" className={({ isActive }) =>
                                isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mb-2' : 'rounded-xl hover:bg-black hover:text-white mb-2'}>My orders</NavLink></li>
                                <li><NavLink to="/dashboard/mywishlist" className={({ isActive }) =>
                                    isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black' : 'rounded-xl hover:bg-black hover:text-white '}>My wishlist</NavLink></li></> :
                            null
                    }
                    {
                        userRole === "seller" ?
                            <>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mb-2' : 'rounded-xl hover:bg-black hover:text-white mb-2'} to="/dashboard/addproduct">Add a product
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mb-2' : 'rounded-xl hover:bg-black hover:text-white mb-2'} to="/dashboard/myproducts">My products</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black' : 'rounded-xl hover:bg-black hover:text-white '} to="/dashboard/mybuyers">My buyers</NavLink></li>
                            </> : null
                    }
                    {
                        userRole === "admin" ? <>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mb-2' : 'rounded-xl hover:bg-black hover:text-white mb-2'} to="/dashboard/allseller">All seller</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mb-2' : 'rounded-xl hover:bg-black hover:text-white mb-2'} to="/dashboard/allbuyer">All buyer</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black' : 'rounded-xl hover:bg-black hover:text-white'}to="/dashboard/reported">Reported Items</NavLink></li>
                        </> : null
                    }
                </ul>

            </div>
        </div>
    );
};

export default SideBar;