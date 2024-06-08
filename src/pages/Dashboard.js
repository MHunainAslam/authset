import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/authslice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const logos = () => {
        dispatch(logout())
        localStorage.removeItem('loginuser')
    }
    return (
        <button onClick={() => logos()}>logput</button>
    )
}

export default Dashboard