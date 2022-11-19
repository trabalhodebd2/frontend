import React from "react"
import { Link } from "react-router-dom"
import { signOut } from "../services/auttentication"

import logOut from "../img/log-out.svg"

export default () => (
    <Link to="/login" className="flex items-center" onClick={() => signOut()}>
        <img src={logOut} className="h-6 mr-2" />
        <p className="text-primary text-2xl">sair</p>
    </Link>
)