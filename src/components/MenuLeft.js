import React from "react"

import MenuButtons from "../components/MenuButtons"
import Logo from "../components/Logo"
import Exit from "../components/Exit"

export default (props) => {
    return (
        <section className={`bg-white w-72 px-4 py-12 h-full 
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