import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getRole } from '../../api/getRole';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../Pages/Shared/Loader/Loader';

const SellerRoute = ({children}) => {
    const {user, loading, userRole, setUserRole} = useContext(AuthContext);
    getRole(user.email).then(res=>setUserRole(res));
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if (user && userRole==="admin"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace>
    </Navigate>;
};

export default SellerRoute;