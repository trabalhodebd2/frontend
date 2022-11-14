import React from "react"

import Card from "./Card"

export default () => {
    const listCards = [
        {title: "Hemonúcleos em Cajazeiras", num: 3}, 
        {title: "Hemonúcleos na Paraíba", num: 410}, 
        {title: "Hemonúcleos no Brasil", num: 2123333}
    ]

    const listElement = listCards.map(element => {
        return <Card title={element.title} number={element.num} />
    })

    return (
        <div className="w-full flex justify-between gap-4">
            {listElement}
        </div>
    )
}