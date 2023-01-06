import React, { useState, useEffect } from "react"
import eye from "../../img/eye.svg"
import eyeOff from "../../img/eye-off.svg"

export default (props) => {
    const textClass = ("bg-white-100 w-full h-12 rounded-xl p-4 text-sm")

    const [img, setImg] = useState(eyeOff)
    const [placeholder, setPlaceholder] = useState()
    const [className, setClassName] = useState(textClass)
    const [value, setValue] = useState(props.value || "")
    const [type, setType] = useState(props.type || "text")
 
    useEffect(() => {
        if (type === "text") {
            setPlaceholder(props.placeholder || "Ex: João")
        } else if (type === "password") {
            setPlaceholder(props.placeholder || "Ex: 12345")
            setClassName(className + " pr-12")
        } else if (type === "number") {
            setClassName(className + " input-number")
            setValue(value.toLocaleString('pt-BR'))
        } else if (type === "email") {
            setPlaceholder(props.placeholder || "Ex: joao@gmail.com")
        }
    }, [])
    
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

    const input = (
        <input
            required
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={e => setValue(e.target.value)}
        /> 
    )

    const switchInput = () => {
        switch (type) {
            case "text":
                if (img === eye) {
                    return (
                        <div className="relative">
                            {input}
                            {picture}
                        </div>
                    )
                }
                return input
            case "password":
                return (
                    <div className="relative">
                        {input}
                        {picture}
                    </div>
                )
            default:
                return input
        }
    }
    
    const elementInput = switchInput()

    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-base m-2">{props.title}</p>
            {elementInput}
        </label>
    )
}