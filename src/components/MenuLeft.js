import React from "react"

import MenuButtons from "./MenuButtons"
import Logo from "./Logo"
import Exit from "./Exit"

export default (props) => {
    return (
        <section className={`bg-white w-96 px-4 py-12 h-full 
            flex flex-col justify-between items-center`}>
            <div className="flex flex-col justify-between ">
                <picture className="mb-32">
                    <Logo size="small" />
                </picture>
                <MenuButtons position={props.button_position} />
            </div>

            <Exit />
        </section>
    )
}