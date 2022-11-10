import React from "react";

import eye from "../img/eye.svg"
import home from "../img/home.svg"
import plus from "../img/plus-square.svg"

// Solução Temporaria

import eyeWhite from "../img/eye-white.svg"
import homeWhite from "../img/home-white.svg"
import plusWhite from "../img/plus-square-white.svg"

export default (props) => {
    const list = [
        {img: home, title: "Home", link: "/home", img_white: homeWhite}, 
        {img: eye, title: "Cadastrar um hemonúcleo", link: "/cadastrar_hemonucleo", img_white: eyeWhite}, 
        {img: plus, title: "Visualizar um hemonúcleo", link: "/visualizar_hemonucleo", img_white: plusWhite}
    ]

    const listElement = list.map((element, index) => {
        let textClass = "bg-white-100 w-full h-12 p-3 rounded-2xl flex items-center"
        let classImg = "w-5 mr-4"

        if (props.position == index + 1) {
            return (
                <button className={textClass + " bg-secondary text-white"}>
                    <img src={element.img_white} className={classImg + " stroke-white"} />
                    {element.title}
                </button>
            )
        }

        return (
            <a href={element.link}>
                <button className={textClass}>
                    <img src={element.img} className={classImg} />
                    {element.title}
                </button>
            </a>
        )
    })

    return (
        <div className="flex flex-col gap-3">
            {listElement}
        </div>
    )
}