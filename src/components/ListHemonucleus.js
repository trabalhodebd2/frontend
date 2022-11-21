import React, { useState } from "react";
import Label from "./Label";

export default (props) => {
    const list = props.list || []

    const listElements = list.map((element, index) => {
        const text = element.properties.title
        if (index == 0) return <Label index={1} className="border-t-0" text={text} value={element.id} />
        return <Label index={index + 1} text={text} value={element.id} />
    })

    return (
        <div className={("bg-white-100 p-6 w-full max-h-[19.75rem] overflow-auto" 
            + " rounded-2xl scrollbar")}>{listElements}</div>
    )
}