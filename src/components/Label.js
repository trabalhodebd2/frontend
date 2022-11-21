import React, { useState } from "react";

export default (props) => {
    const index = props.index

    const textClass = "border-secondary border-solid text-xl"
    const [classPluss, setClassPluss] = useState("")

    const classLabel = (textClass 
        + " flex cursor-pointer border-t " 
        + classPluss + " " + (props.className || "")
    )
    const classIndex = (textClass 
        + " border-r w-10 py-2 grid place-items-center text-secondary "
        + classPluss
    )
    const classInfoName = (textClass
        + " p-2 pl-3 text-secondary-dark "
        + classPluss
    )

    return (
        <label className={classLabel}>
            <input type="radio" value={props.value} className="hidden" />
            <p className={classIndex}>{index}</p>
            <p className={classInfoName}>{props.text}</p>
        </label>
    )
}