import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getRole } from '../../../api/getRole';
import { AuthContext } from '../../../context/AuthProvider';

const SideBar = () => {
    const {user,userRole, setUserRole} = useContext(AuthContext)
    getRole(user.email).then(res=>setUserRole(res));
    return (
        <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to="/dashboard/test">Sidebar Item 1</Link></li> */}
                        {
                            userRole === "user" ? 
                            <><li><Link>My orders</Link></li>
                            <li><Link>My wishlist</Link></li></> :
                            null
                        }
                        {
                            userRole==="seller" ?
                            <>
                                <li><Link>Add a product</Link></li>
                                <li><Link>My products</Link></li>
                                <li><Link>My buyers</Link></li>
                            </>: null
                        }
                        {
                            userRole ==="admin" ?<>
                            <li><Link>All seller</Link></li>
                            <li><Link>All buyer</Link></li>
                            <li><Link>Reported Items</Link></li>
                        </>: null
                        }
                    </ul>

                </div>
            </div>
    );
};

export default SideBar;