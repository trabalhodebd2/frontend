import React from "react"

export default (props) => {
    const classSend = props.className || ""
    const textClass = "text-xl font-bold tracking-wider " + classSend
    return (
        <h1 className={textClass}>{props.text}</h1>
    )
}