import React from "react";

export default (props) => {
    const number = props.number
    const numberFormat = number.toLocaleString('pt-BR')
    return (
        <div className="bg-white rounded-2xl w-80 h-44 p-6 flex flex-col justify-between">
            <p className="text-2xl text-secondary-dark w-40">{props.title}</p>
            <p className="text-[2rem] text-primary font-bold">{numberFormat}</p>
        </div>
    )
}