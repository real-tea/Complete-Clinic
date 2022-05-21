import React from 'react';
import { Redirect } from 'react-router-dom';
import { Router } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    //this is used for solve reload to redirect login issue
    if (isLoading) {
        return (<LoadingScreen></LoadingScreen>);
    }
    return (
        <Router
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;