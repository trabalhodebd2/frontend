import React from "react"

import photoUserSmall from "../img/photoUser-small.jpg"
import photoUser from "../img/photoUser.jpg"

export default (props) => {
    const size = props.size || "small"
    const textClass = "rounded-full h-[3.75rem] cursor-pointer"

    if (size == "small") {
        return (
            <a href="account">
                <img src={photoUserSmall} className={textClass} />
           </a>
        )
    }

    return (
        <img 
            src={photoUser} 
            className={textClass + " user-photo"} 
        />
    )
}