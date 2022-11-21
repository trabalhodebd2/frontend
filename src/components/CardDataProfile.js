import React from "react";
import { Link } from "react-router-dom";
// import { getUser } from "../services/crudUser";

export default (props) => {
    // const objUser = getUser()
    const list = [
        {title: "Nome", value: "José da Silva Júnior"},
        {title: "E-mail", value: "jose@gmail.com"},
        {title: "Telefone", value: "+55 (83) 99101-7224"}
    ]

    const listElements = list.map(element => {
        return (
            <span className="text-secondary-dark">
                <p className="font-bold">{element.title}</p>
                <p>{element.value}</p>
            </span>
        )
    })

    const textClass = ("text-base p-8 fixed z-10 shadow h-[300px] w-[300px] top-40 right-0 bg-white rounded-2xl"
        + ` ${props.status ? "translate-x-0" : "translate-x-[110%]"} duration-500`)

    return (
        <div className={textClass}>
            <div className="grid gap-4">
                {listElements}
            </div>
            <div className="w-full my-11 flex justify-center">
                <Link
                    to="/account"
                    className="text-secondary underline hover:text-secondary-dark duration-300"
                >Editar informações</Link>
            </div>
        </div>
    )
}