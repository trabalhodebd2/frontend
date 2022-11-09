import React, { useState } from "react";
import eye from "../img/eye.svg"
import eyeOff from "../img/eye-off.svg"

export default (props) => {
    const [img, setImg] = useState(eyeOff)
    const [type, setType] = useState(props.type || "text")
    const elementInput = switchInput(props, type, setType, img, setImg)
    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-base m-2">{props.title}</p>
            {elementInput}
        </label>
    )
}

const switchInput = (props, type, setType, img, setImg) => {
    const textClass = "bg-white-100 w-full h-12 rounded-xl p-4 text-sm"
    const picture = (
        <img 
            src={img}
            className="w-6 cursor-pointer absolute right-3.5 top-[11px]" 
            onClick={() => {
                setImg(img == eye ? eyeOff : eye)
                setType(type == "text" ? "password" : "text")
            }}
       />
    )
    switch (type) {
        case "text":
            const placeholder = props.placeholder || "Ex: João"
            if (img == eye) {
                return (
                    <div className="relative">
                        <input
                            required
                            type={type}
                            placeholder="Ex: 12345"
                            className={textClass + " pr-12"}
                        /> 
                        {picture}
                    </div>
                )
            }
            return (
                <input
                    required
                    type={type}
                    placeholder={placeholder}
                    className={textClass}
                /> 
            )
        case "password":
            return (
                <div className="relative">
                    <input
                        required
                        type={type}
                        placeholder="Ex: 12345"
                        className={textClass + " pr-12"}
                    />
                    {picture}
                </div>
            )
        default:
            return (
                <input
                    required
                    type={type}
                    placeholder={props.placeholder}
                    className={textClass + " pr-12"}
                />
            )
    }
}