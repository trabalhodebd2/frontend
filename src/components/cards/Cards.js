import React, { useEffect, useState } from "react"
import { getHemos } from "../../services/crudHemos"
import { getHemosByCity, getHemosByUf } from "../../services/dataHemos"

import Card from "./Card"

export default () => {
    const city = "Cajazeiras"
    const country = "Paraíba"
    const uf = "PB"

    const [listCards, setListCards] = useState([])

    const [numCity, setNumCity] = useState(3)
    const [numCountry, setNumCountry] = useState(410)
    const [numBrasil, setNumBrasil] = useState(2123333)

    useEffect(() => {
        const updateValues = async () => {
            const allCity = await getHemosByCity(city)
            setNumCity(allCity.length)

            const AllCountry = getHemosByUf(uf)
            setNumCountry(AllCountry)

            const all = await getHemos()
            setNumBrasil(all.length)
        }

        updateValues()

        const list = [
            {title: `Hemonúcleos em ${city}`, num: numCity}, 
            {title: `Hemonúcleos na ${country}`, num: numCountry}, 
            {title: "Hemonúcleos no Brasil", num: numBrasil}
        ]

        setListCards(list)
    }, [])

    const listElement = listCards.map(element => {
        return <Card title={element.title} number={element.num} />
    })

    return (
        <div className="w-full flex justify-between gap-4">
            {listElement}
        </div>
    )
}