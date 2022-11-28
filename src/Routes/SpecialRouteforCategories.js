import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useGetRoleV2 from '../api/useGetRoleV2';
import { AuthContext } from '../context/AuthProvider';
import Loader from '../Pages/Shared/Loader/Loader';

const SpecialRouteforCategories = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [role, roleLoading] = useGetRoleV2(user?.email);
    const location = useLocation();

    if(loading || roleLoading){
        return <Loader></Loader>
    }

    if (user && (role==="user" || role==="admin" )){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default SpecialRouteforCategories;