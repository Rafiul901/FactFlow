import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loader from './Loader';
import { AuthContext } from '../Auth/AuthContext';

const Private = ({children}) => {
    const {user,loading} =use(AuthContext);

    const location = useLocation();
    console.log(location);
  
    if(loading){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children;
    }



    return <Navigate state={location.pathname} to ='/login'></Navigate>
};

export default Private;