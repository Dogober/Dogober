import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { privateRoutes, publicRoutes } from "../router/Routes";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        
        return <Loader/>
    }
    console.log(isAuth)
    return(

        isAuth

        ? <Routes>
            {privateRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element}/>
            )}
            </Routes>
        : <Routes>
            {publicRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element}/>
            )}
            </Routes>
            )
            
        }

export default AppRouter; 