import React from "react";
import logo from '../img/logo.svg'

export default (props) => {
    const size = props.heigth || 'h-8'
    const textClass = size + " mx-auto mb-5"
    return <img src={logo} className={textClass} alt={props.alt} />
}