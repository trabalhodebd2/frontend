import React from "react"

export default (props) => {
    const textSend = props.className || ""
    const textClass = ` bg-white m-auto p-14 w-full max-w-[33rem] 
        rounded-2xl flex flex-col items-center`
    return (
        <form 
            className={textSend + textClass}
        >{props.children}</form>
    )
}