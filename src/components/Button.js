import React from "react";

export default (props) => {
    const color = props.bgColor || "#EF233C";

    if (color == "#EF233C") {
        const textClass = `bg-primary text-sm text-white w-40 p-1 rounded-lg`
        return <button className={textClass}>{props.text}</button>
    }

    const textClass = `bg-transparent text-sm text-primary w-40 p-1 rounded-lg 
        border-2 border-solid border-primary`
    return <button className={textClass}>{props.text}</button>
}