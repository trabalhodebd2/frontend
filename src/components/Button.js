import React from "react";

export default (props) => {
    const full = props.full || false;
    let textClass = "text-sm w-36 sm:w-40 p-1 rounded-lg duration-300 "

    if (full) {
        textClass += "bg-primary text-white hover:bg-primary-dark"
        return (
            <a href={props.href}>
                <button className={textClass}>{props.text}</button>
            </a>
        )
    }

    textClass += `bg-transparent text-primary border-2 
        border-solid border-primary hover:bg-white-100`

    return (
        <a href={props.href}>
            <button className={textClass}>{props.text}</button>
        </a>
    )
}