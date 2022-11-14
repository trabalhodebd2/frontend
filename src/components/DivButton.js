import React from "react"

import Button from './Button'

export default (props) => {
    const textCacel = props.textCancel || "Cancelar"
    const text = props.text || "Enviar"

    const textClass = "flex justify-between w-full mt-6 gap-8"
    const classSend = props.className || ""
    
    return (
        <div className={textClass + " " + classSend}>
            <Button text={textCacel} href={props.hrefCancel} />
            <Button text={text} full={true} />
        </div>
    )
}