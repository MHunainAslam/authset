import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Privateroutes = ({ children }) => {
    const { isauth } = useSelector((item) => item.login)
    console.log(isauth);
    return (
        isauth ?
            <Outlet />
            : <Navigate to={'/'}/>
    )
}

export default Privateroutes