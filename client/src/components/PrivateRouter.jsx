import React from 'react'
import { useAuthContext } from '../contexts/Auth'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ Component }) => {

    const { isAuth } = useAuthContext()
    if (!isAuth) return <Navigate to='/auth/login' />
    return (
        <Component />
    )
}

export default PrivateRouter