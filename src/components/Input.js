import React from "react";

export default (props) => {
    const type = props.type || "text"
    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-base m-2">{props.title}</p>
            <input
                required
                type={type}
                placeholder={props.placeholder}
                className="bg-white-100 w-full h-12 rounded-xl p-4 text-sm"
            />
        </label>
    )
}