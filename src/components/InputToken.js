import React from "react";
import './InputToken.css'

export default (props) => {
    const list = ['', '', '', '', '', '']
    const classText = `h-16 w-16 bg-white-100 rounded-xl text-lg text-center`
    const listElement = list.map(() => (
        <input type="number" className={classText} min="1" max="9" required />
    ))
    return (
        <label className='flex flex-col w-full mt-2'>
            <p className="text-sm m-2">{props.title}</p>
            <div className="w-full flex justify-between gap-3">
                {listElement}
            </div>
        </label>
    )
}