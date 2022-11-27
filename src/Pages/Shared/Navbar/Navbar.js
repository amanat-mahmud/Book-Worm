import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/Book worm.png"
import { AuthContext } from '../../../context/AuthProvider';
const Navbar = () => {
    const { user, logOut} = useContext(AuthContext)
    const menuItem = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mr-2' : 'rounded-xl hover:bg-black hover:text-white mr-2'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mr-2' : 'rounded-xl hover:bg-black hover:text-white mr-2'} to='/categories'>Categories</NavLink></li>
        <li><NavLink to="/advertised" className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mr-2' : 'rounded-xl hover:bg-black hover:text-white mr-2'}>Advertised</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl font-semibold hover:bg-black mr-2' : 'rounded-xl hover:bg-black hover:text-white mr-2'} to='/blog'>Blog</NavLink></li>
        <div className="form-control flex md:hidden my-2 w-3/4">
            <input type="text" placeholder="Search"
                className="input  input-bordered mr-2 border-[#92B4EC]" />
        </div>
        {
            user?.email ? '' : <li><NavLink className={({ isActive }) =>
                isActive ? 'flex lg:hidden' : 'btn border-[#92B4EC] text-[#92b4ec] bg-white rounded-lg hover:text-white hover:border-black flex lg:hidden'} to='/login'>Log in </NavLink></li>}


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
                {/* //className='btn w-1/4 btn-ghost h-1/3' */}
                <img src={logo} alt="" className='w-20 lg:block hidden' />
                <Link to="/" className="btn btn-ghost normal-case lg:text-xl">Book worm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control hidden md:flex">
                    <input type="text" placeholder="Search"
                        className="input  input-bordered border-[#92B4EC] mr-2" />
                </div>
                {
                    user?.email ? '' : <>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'hidden lg:flex' : 'btn border-[#92B4EC] text-[#92b4ec] bg-white rounded-lg hover:text-white hover:border-black hidden lg:flex mr-2'} to='/login'>Log in</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? '' : "btn border-[#92B4EC] text-[#92b4ec] bg-white rounded-lg hover:text-white hover:border-black  mr-2"} to='/signup'>Sign up</NavLink>
                    </>}
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
            </div>
        </div>
    );
};

export default Navbar;