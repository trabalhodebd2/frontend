import React, { useState } from "react"
import './InputToken.css'

export default (props) => {
    const list = ['', '', '', '', '', '']
    const classText = `h-12 w-12 bg-white-100 rounded-xl text-lg 
    text-center control-number`

    const listElement = list.map(() => {
        const [value, setValue] = useState();
      
        return (
            <input 
                type="number" 
                className={classText} 
                onKeyDown={ event => { 
                    const input = event.key
                    if (Number(input) || input == "0") 
                        setValue(input)
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