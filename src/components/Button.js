import React from "react";

export default (props) => {
    const full = props.full || false;
    let textClass = `text-sm w-36 sm:w-40 p-1 rounded-lg duration-300 
        border-2 border-solid border-primary `

    if (full) {
        textClass += "bg-primary text-white hover:bg-primary-dark"
        
        return <button className={textClass}>{props.text}</button>
    }

    textClass += `bg-transparent text-primary hover:bg-white-100 
        flex justify-center`

    return (
        <a href={props.href} className={textClass}>
            {props.text}
        </a>
    )
}