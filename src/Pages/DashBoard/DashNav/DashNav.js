import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import logo from "../../../assets/images/Book worm.png"
const DashNav = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItem = 
    <>
        <li><Link to="/" className='rounded-xl hover:bg-black hover:text-white mr-2'>Home</Link></li>
        <li><Link  to='/categories' className='rounded-xl hover:bg-black hover:text-white mr-2'>Categories</Link></li>
        <li><Link to="/advertised" className='rounded-xl hover:bg-black hover:text-white mr-2'>Advertised</Link></li>
        <li><Link  to='/blog' className='rounded-xl hover:bg-black hover:text-white '>Blog</Link></li>
    </>

    const handleSingOut = () => {
        logOut()
            .then(res => {
                localStorage.removeItem('accessToken')
                toast.success("Logged out")
            })
            .catch()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <img src={logo} alt="" className='w-20 lg:block hidden' />
                <Link to="/" className="btn btn-ghost normal-case lg:text-xl">Book worm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="user" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className='font-bold'>{user?.displayName}</p>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">Upcoming</span>
                                    </Link>
                                </li>
                                <li><Link to="/dashboard">DashBoard</Link></li>
                                <li><Link>Settings</Link></li>
                                <Link className="btn border-0 bg-[#92B4EC] mt-1" onClick={handleSingOut}>Log out</Link>
                            </ul>
                        </div> : null
                }
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default DashNav;