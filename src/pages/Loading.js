import { useNavigate } from 'react-router-dom'
import React, { useEffect } from "react"

import Logo from "../components/Logo"
import { isAuthenticated } from '../controller/auttentication'

export default () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            if (isAuthenticated()) return navigate("/home")
            navigate("/login")
        }, 2000)
    }, [])

    return (
        <section className="grid place-items-center h-screen w-full">
            <Logo size="great" />
        </section>
    )
}