import React from "react"

import search from "../../img/search.svg"
import searchWhite from "../../img/search-white.svg"

export default (props) => {
    const type = props.type || 1
    const placeholder = props.placeholder || "Pesquisar"
    const textClass = "w-full h-[3.75rem] rounded-2xl px-8"
    
    if (type === 2) {
        return (
            <div className="flex bg-white-100 rounded-2xl">
                <input 
                    type="text" 
                    className={textClass + " bg-white-100 text-sm"}
                    placeholder={placeholder} 
                />
                <button className={("h-[3.75rem] w-[3.75rem] rounded-2xl"
                    + " grid place-items-center bg-secondary")}>
                    <img src={searchWhite} className="h-6" />
                </button>
            </div>
        )
    }
    return (
        <div className="relative w-full">
            <img src={search} className="absolute left-6 inset-y-[1.12rem] h-6" />
            <input 
                type="text" 
                className={textClass + " pl-16"} 
                placeholder={placeholder}
            />
        </div>
    )
}