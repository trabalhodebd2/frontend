import React from "react";

export default (props) => {
    const textClass = "bg-white-100 w-full h-12 rounded-xl p-4 text-sm"
    
    const valueSelect = props.value
    const listOptions = props.options
    
    const listElement = listOptions.map(obj => {
        if (valueSelect === obj.value) {
            return <option value={obj.value} selected>{obj.name}</option>
        }
        return <option value={obj.value}>{obj.name}</option>
    })
    
    return (
        <label className="flex flex-col w-full mt-2">
            <p className="text-base m-2">{props.title}</p>
            <div className="div-select">
                <select className={textClass}>
                    <option disabled selected>Selecione uma das opções</option>
                    {listElement}
                </select>
            </div>
        </label>
    )
}