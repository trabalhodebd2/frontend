import { useNavigate } from 'react-router-dom'
import React, { useEffect } from "react"

import Logo from "../components/Logo"

export default () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }, [])

    return (
        <section className="flex items-center h-screen">
            <Logo size="great" />
        </section>
    )
}