import React from "react"

import Button from './Button'

export default (props) => {
    const textCacel = props.textCancel || "Cancelar"
    const text = props.text || "Enviar"

    const classSend = props.className || ""
    const textClass = "flex justify-between w-full mt-6 gap-8 "  + classSend
    
    return (
        <div className={textClass}>
            <Button text={textCacel} href={props.hrefCancel} />
            <Button text={text} full={true} />
        </div>
    )
}