import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
    const isAuthorized = True
    if(isAuthorized){
        return (
            <div>
            <Outlet />
            </div>
        )  
    } else{
        return <Navigate to="/login"/>
    }
}
