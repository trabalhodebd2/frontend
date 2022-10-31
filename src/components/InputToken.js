import React from "react";
import './InputToken.css'

export default (props) => {
    const list = ['', '', '', '', '', '']
    const classText = `h-12 w-12 bg-white-100 rounded-xl text-lg text-center`
    const listElement = list.map(element => (
        <input type="number" className={classText} min="1" max="9" />
    ))
    return (
        <label className='flex flex-col w-full mt-5'>
            <p className="text-sm m-2">{props.title}</p>
            <div className="flex justify-content gap-3">
                {listElement}
            </div>
        </label>
    )
}