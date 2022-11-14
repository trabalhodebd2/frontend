import React from "react"

import logOut from "../img/log-out.svg"

export default () => {
    return (
        <a href="/login" className="flex items-center">
            <img src={logOut} className="h-6 mr-2" />
            <p className="text-primary text-2xl">sair</p>
        </a>
    )
}