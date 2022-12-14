import React from "react"

import MenuButtons from "./button/MenuButtons"
import Logo from "./img/Logo"
import Exit from "./Exit"

export default (props) => {
    return (
        <section className={("bg-white w-96 px-4 py-12 h-screen"
            + " flex flex-col justify-between items-center sticky top-0")}>
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