import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/Book worm.png"
const Navbar = () => {
    const menuItem = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl':''}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl font-bold':''} to='/categories'>Categories</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'bg-[#92B4EC] text-white rounded-xl':''} to='/login'>Log in </NavLink></li>
        
    </>
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
                <img src={logo} alt="" className='w-20 lg:block hidden'/>
                <Link className="btn btn-ghost normal-case lg:text-xl">Book worm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                
                <Link className="btn border-0 bg-[#92B4EC]">Sign up</Link>
                <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <Link className="btn border-0 bg-[#92B4EC]">Log out</Link>
      </ul>
    </div>
            </div>
        </div>
    );
};

export default Navbar;