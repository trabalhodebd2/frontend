import React, { useState } from "react"

export default (props) => {
    const classText = `h-12 w-12 bg-white-100 rounded-xl text-lg 
    text-center control-number input-number`

    const listElement = Array(6).fill('').map(() => {
        const [value, setValue] = useState()
      
        return (
            <input 
                type="number" 
                className={classText} 
                onKeyDown={ event => { 
                    const input = event.key
                    console.log(input)
                    if (Number(input) || input == "0") 
                        setValue(input)
                    else if (input == "Backspace")
                        setValue("")
                }} 
                value={value}
                required 
            />
        )
    })

    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-sm m-2">{props.title}</p>
            <div className="w-full flex justify-between gap-3">
                {listElement}
            </div>
        </label>
    )
}