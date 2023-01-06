import React, { useState } from "react";
import Label from "./input/Label";

export default (props) => {
    const list = props.list || []

    const [lastElem, setLastElem] = useState()

    const changeColor = (event) => {
        const elem = event.currentTarget

        elem.style.backgroundColor = "#8D99AE"
        elem.style.borderRadius = "4px"
        elem.querySelector("p").style.color = "#EDF2F4"
        elem.querySelectorAll("p")[1].style.color = "#EDF2F4"

        if (lastElem && lastElem !== elem) {
            lastElem.style.backgroundColor = ""
            lastElem.style.borderRadius = ""
            lastElem.querySelector("p").style.color = ""
            lastElem.querySelectorAll("p")[1].style.color = ""
        }

        setLastElem(elem)
    }

    const listElements = list.map((element, index) => {
        const text = element.properties.title
        if (index == 0) return <Label index={1} className="border-t-0" text={text} value={element.id} onClick={changeColor} />
        return <Label index={index + 1} text={text} value={element.id} onClick={changeColor} />
    })

    return (
        <div className={("bg-white-100 p-6 w-full max-h-[19.75rem] overflow-auto" 
            + " rounded-2xl scrollbar")}>{listElements}</div>
    )
}