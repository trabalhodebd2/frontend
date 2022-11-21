import React from "react";

export default (props) => {
    const list = props.list || []
    const textClass = "border-secondary border-solid text-xl"
    const classIndex = textClass + " border-r w-10 py-2 text-secondary grid place-items-center"
    const classInfoName = textClass + " p-2 pl-3 text-secondary-dark"

    const listElements = list.map((element, index) => {
        if (index === 0) return (
            <label className={textClass + " flex"}>
                <input type="radio" value={element.id} className="hidden" />
                <p className={classIndex}>{1}</p>
                <p className={classInfoName}>{element.properties.title}</p>
            </label>
        )
        return (
            <label className={textClass + " flex border-t"}>
                <input type="radio" value={element.id} className="hidden" />
                <p className={classIndex}>{index + 1}</p>
                <p className={classInfoName}>{element.properties.title}</p>
            </label>
        )
    })

    return (
        <div className={("bg-white-100 p-6 w-full max-h-[19.75rem] overflow-auto" 
            + " rounded-2xl scrollbar")}>{listElements}</div>
    )
}