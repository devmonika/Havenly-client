import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 flex justify-center items-center"></progress>
    }

    // if(!user){
    //     return <Navigate to="/" state={{from:location}} replace></Navigate>
    // }
    // return children;
    if(user){
        return children;
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;