import React from "react";

export default () => {
    const list = ["Hemonúcleo de Sousa", "Hemonúcleo de Cajazeiras", "Hemonúcleo de Pombal", 
        "Hemonúcleo de Fortaleza", "Hemonúcleo de João Pessoa", "Hemonúcleo de Recife"]

    const listElements = list.map(element => (
        <li className="">{element}</li>
    ))

    return (
        <ol 
        start="1"
            className="bg-white-100 p-6 w-full rounded-2xl"
        >{listElements}</ol>
    )
}