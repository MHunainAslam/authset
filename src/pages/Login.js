import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authslice'
import { json, useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [Name, setName] = useState('')
    const [pass, setpass] = useState('')
    const { isauth, iserror } = useSelector((item) => item.login)
    const credentialaa = {
        email: Name, password: pass
    }
    useEffect(() => {
        
        console.log(iserror);
        if (isauth) {
            navigate('/dashboard');
            localStorage.setItem('loginuser', JSON.stringify(isauth))
        }
        if (iserror) {
            console.log(iserror);
        }
    }, [isauth, navigate, iserror]);
    const loginuser = () => {

        dispatch(login(credentialaa))

    }
    return (
        <>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} name="" id="" />
            <input type="text" value={pass} onChange={(e) => setpass(e.target.value)} name="" id="" />
            <button onClick={loginuser}>login</button>
        </>
    )
}

export default Login