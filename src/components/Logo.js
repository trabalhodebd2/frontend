import React from "react"
import logo from '../img/logo.svg'

export default (props) => {
    const size = switchLogo(props.size)
    const textClass = size + " mx-auto"
    return <img src={logo} className={textClass} alt={props.alt} />
}

const switchLogo = (size) => {
    switch (size) {
        case "small":
            return "h-5"
        case "great":
            return "h-16"
        default:
            return "h-10 mb-9"
    }
}