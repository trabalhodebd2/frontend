import React from "react";

export default (props) => {
    const full = props.full || false;
    let textClass = "text-sm w-40 p-1 rounded-lg "

    if (full) {
        textClass += "bg-primary text-white"
        return <button className={textClass}>{props.text}</button>
    }

    textClass += `bg-transparent text-primary border-2 
        border-solid border-primary`

    return <button className={textClass}>{props.text}</button>
}