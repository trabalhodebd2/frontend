import React, { useState } from "react"

export default (props) => {
    const [classAnimation, setClassAnimation] = useState("page-start")
    const textClass = ("h-screnn w-full grid place-items-center"
        + ` ${classAnimation}`)
    return (
        <section className={textClass}>
            {props.children}
        </section>
    )
}