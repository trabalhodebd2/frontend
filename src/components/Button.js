import React from "react";

export default (props) => {
    const color = props.color || "#EF233C";
    if (color == "#EF233C") {
        const textClass = `bg-[#EF233C] text-sm text-white w-40 p-1 rounded-lg
            border-2 border-solid border-[#EF233C]`
        return <button className={textClass}>{props.text}</button>
    }
    const textClass = `bg-[#fff] text-sm text-[#EF233C] border-gray w-40 p-1 rounded-lg 
        border-2 border-solid border-[#EF233C]`
    return <button className={textClass}>{props.text}</button>
}