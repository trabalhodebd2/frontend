import React, { useState } from "react"

export default (props) => {
    const [classAnimation, setClassAnimation] = useState("page-start")
    const textClass = ("bg-white-100 min-w-screen min-h-screen grid"
        + ` place-center ${classAnimation}`)
    return (
        <section className={textClass}>
            {props.children}
        </section>
    )
}