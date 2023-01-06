import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../services/crudUser";

export default (props) => {
    const [list, setList] = useState([
        {title: "Nome", value: "José da Silva Júnior"},
        {title: "E-mail", value: "jose@gmail.com"},
        {title: "Telefone", value: "+55 (83) 99101-7224"}
    ])

    useEffect(() => {
        const updateList = async () => {
            const user = await getUser()
            setList([
                {title: "Nome", value: user.full_name || "[Sem Nome]"},
                {title: "E-mail", value: user.email || "[Sem Email]"},
                {title: "Telefone", value: user.phone || "[Sem Telefone]"}
            ])
        }

        updateList()
    }, [])

    const listElements = list.map(element => {
        return (
            <span className="text-secondary-dark">
                <p className="font-bold">{element.title}</p>
                <p>{element.value}</p>
            </span>
        )
    })

    const textClass = ("text-base p-8 fixed z-10 shadow-card h-[300px] w-[300px] top-40 right-16 bg-white rounded-2xl"
        + ` ${props.status ? "translate-x-0" : "translate-x-[150%]"} duration-500`)

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