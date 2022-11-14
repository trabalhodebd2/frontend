import React from "react"

import Button from './Button'

export default (props) => {
    const textCacel = props.textCancel || "Cancelar"
    const text = props.text || "Enviar"
    return (
        <div className="flex justify-between w-full mt-6 gap-8">
            <Button text={textCacel} href={props.hrefCancel} />
            <Button text={text} full={true} />
        </div>
    )
}