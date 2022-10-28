import React from "react";

export default (props) => {
    const type = props.type || "text"
    return (
        <label className='flex flex-col w-full mt-5'>
            <p className="text-sm m-2">{props.title}</p>
            <input
                type={type}
                placeholder={props.placeholder}
                className="w-full bg-white-100 h-11 rounded-xl p-4 text-xs"
            />
        </label>
    )
}