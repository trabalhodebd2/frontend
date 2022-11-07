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
        <picture className="w-2/12 flex justify-center items-center">
            <img 
                src={img}
                className="h-7 cursor-pointer" 
                onClick={() => {
                    setImg(img == eye ? eyeOff : eye)
                    setType(type == "text" ? "password" : "text")
                }}
            />
        </picture>
    )
    switch (type) {
        case "text":
            const placeholder = props.placeholder || "Ex: João"
            if (img == eye) {
                return (
                    <div className="flex bg-white-100 rounded-xl">
                        <input
                            required
                            type={type}
                            placeholder="Ex: 12345"
                            className={textClass + " w-10/12"}
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
                <div className="flex bg-white-100 rounded-xl">
                    <input
                        required
                        type={type}
                        placeholder="Ex: 12345"
                        className={textClass + " w-10/12"}
                    />
                    {picture}
                </div>
            )
    }
}