import React from "react"

export default (props) => {
    const classSend = props.className
    const textClass = "text-xl font-bold tracking-wider"
    return (
        <h1 className={textClass + " " + classSend}>{props.text}</h1>
    )
}