import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;























// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import AuthProvider, { AuthContext } from '../contexts/AuthProvider/AuthProvider';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(AuthContext);

//     const location = useLocation();
//     if(loading){
//         return <h1 className='text-5xl'>Loading...</h1> //use spinner
//     }
//     if(user){
//         return children;
//     }
//     return <Navigate state={{from: location}} replace></Navigate>;
// };

// export default PrivateRoute;