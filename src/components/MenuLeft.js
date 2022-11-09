import React from "react"

import MenuButtons from "../components/MenuButtons"
import Logo from "../components/Logo"

export default (props) => {
    return (
        <section className="bg-white w-72 h-full">
            <div className="p-4 pt-12 flex flex-col justify-between ">
                <picture className="mb-32">
                    <Logo size="small" />
                </picture>
                <MenuButtons position={props.button_position} />
            </div>

            {/* <Exit /> */}
        </section>
    )
}