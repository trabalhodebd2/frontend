import React, { useState } from "react"

import photoUserSmall from "../img/photoUser-small.jpg"
import photoUser from "../img/photoUser.jpg"

import CardDataProfile from "./CardDataProfile"

export default (props) => {
    const size = props.size || "small"
    const textClass = "rounded-full h-[3.75rem] cursor-pointer"

    const [active, setActive] = useState(false)
    const cardData = props.haveCardData === undefined ? 
        <CardDataProfile status={active} /> : <></>

    if (size === "small") {
        return (
            <>
                <img 
                    src={photoUserSmall} 
                    className={textClass + " ml-8"} 
                    alt="Usuario" 
                    onClick={() => setActive(!active)}
                />
                {cardData}
            </>
        )
    }

    return (
        <div className="relative">
            <img 
                src={photoUser} 
                className={textClass + " h-[9.375rem]"} 
                alt="Foto de Usuario"
            />
            <div 
                className={("absolute h-full w-full bg-secondary text-white text-base"
                    + " underline grid place-items-center duration-300 top-0 font-bold"
                    + " rounded-full cursor-pointer opacity-0 hover:opacity-[85%]")}
            >Alterar foto</div>
        </div>
    )
}