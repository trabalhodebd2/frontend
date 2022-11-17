import React from "react"

export default (props) => {
    const callback =  props.callback
    const classSend = props.className || ""
    const textClass = ("bg-white m-auto p-14 w-full max-w-[33rem]"
        + " rounded-2xl flex flex-col items-center " + classSend)
    return (
        <form 
            className={textClass}
            onSubmit={e => callback(e)}
        >{props.children}</form>
    )
}