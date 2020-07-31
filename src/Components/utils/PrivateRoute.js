import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticate, deauthenticate, authenticated, logout, ...rest }) {
    console.log(localStorage)
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("authenticated") ? (
                    <Component {...props} logout={logout} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;