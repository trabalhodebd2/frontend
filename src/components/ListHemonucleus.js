import React from "react";

export default () => {
    const list = ["Hemonúcleo de Sousa", "Hemonúcleo de Cajazeiras", "Hemonúcleo de Pombal", 
        "Hemonúcleo de Fortaleza", "Hemonúcleo de João Pessoa", "Hemonúcleo de Recife"]
    const textClass = "border-secondary border-solid text-xl"
    const classIndex = textClass + " border-r w-10 py-2 text-secondary grid place-items-center"
    const classInfoName = textClass + " p-2 pl-3 text-secondary-dark"

    const listElements = list.map((element, index) => {
        if (index === 0) return (
            <li className={textClass + " flex"}>
                <p className={classIndex}>{1}</p>
                <p className={classInfoName}>{element}</p>
            </li>
        )
        return (
            <li className={textClass + " flex border-t"}>
                <p className={classIndex}>{index + 1}</p>
                <p className={classInfoName}>{element}</p>
            </li>
        )
    })

    return (
        <ul className={("bg-white-100 p-6 w-full max-h-[19.75rem] overflow-auto" 
            + " rounded-2xl scrollbar")}>{listElements}</ul>
    )
}