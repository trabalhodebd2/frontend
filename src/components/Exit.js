import React from "react"
import { signOut } from "../controller/auttentication"

import logOut from "../img/log-out.svg"

export default () => (
    <a href="/login" className="flex items-center" onClick={() => signOut()}>
        <img src={logOut} className="h-6 mr-2" />
        <p className="text-primary text-2xl">sair</p>
    </a>
)