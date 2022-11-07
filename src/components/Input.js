import React from "react";
import eye from "../img/eye.svg"
import eyeOff from "../img/eye-off.svg"

export default (props) => {
    const type = props.type || "text"
    const elementInput = switchInput(type, props)
    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-base m-2">{props.title}</p>
            {elementInput}
        </label>
    )
}

const switchInput = (type, props) => {
    const textClass = "bg-white-100 w-full h-12 rounded-xl p-4 text-sm"
    switch (type) {
        case "text":
            const placeholder = props.placeholder || "Ex: João"
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
                <div className={"flex bg-white-100 rounded-xl"}>
                    <input
                        required
                        type={type}
                        placeholder="Ex: 12345"
                        className={textClass + " w-10/12"}
                    />
                    <picture className={`w-2/12 flex 
                        justify-center items-center`}>
                        <img 
                            src={eyeOff}
                            className="h-7 cursor-pointer" 
                        />
                    </picture>
                </div>
            )
    }
}