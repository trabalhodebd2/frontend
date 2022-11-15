import React from "react"
import { Redirect } from 'react-router-dom'

import Logo from "../components/Logo"

export default () => (
    <section className="flex items-center h-screen">
        <Logo size="great" />
        <Redirect to="/login/" />
    </section>
)