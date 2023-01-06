import React from "react"
import { Link } from "react-router-dom"

export default (props) => {
    const full = props.full || false
    const textClass = "text-base w-1/2 h-9 rounded-lg duration-300 cursor-pointer "

    if (full) {
        const classPluss = "bg-primary text-white hover:bg-primary-dark"
        return <button className={textClass + classPluss}>{props.text}</button>
    }

    const classPluss = ("bg-transparent text-primary hover:bg-white-100 flex"
        + " justify-center items-center border-2 border-solid border-primary")

    return (
        <Link to={props.href} className={textClass + classPluss}>
            {props.text}
        </Link>
    )
}