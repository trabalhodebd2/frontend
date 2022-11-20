import React, {useEffect, useState} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated } from "../services/auttentication"
import { getValuesOfInputs } from "../services/elements"
import { getUser } from "../services/crudUser"

import UserPhoto from "../components/UserPhoto"
import DivButton from "../components/DivButton"
import MenuLeft from "../components/MenuLeft"
import Select from "../components/Select"
import Search from "../components/Search"
import Input from "../components/Input"
import Form from "../components/Form"
import { refreshToken } from "../services/token"

export default () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: "José da Silva Júnior",
        email: "jose@gmail.com",
        sex: "M",
        date_birthday: "2002-05-21",
        phone: "+55 (83) 99101-7224",
        password: "************"
    })

    const promise = new Promise((resolve) => resolve());

    useEffect(() => {
        setUser(promise
            .then(getUser)
        )
        if (!isAuthenticated()) return navigate("/login")
    }, [])

    const editData = (event) => {
        const form = event.currentTarget
        const [name, email, dateBirth, telephone, pass] = getValuesOfInputs(form)
        const sex = form.querySelector("select")
        
        navigate("/home")
    }

    return (
        <>
            <MenuLeft />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex">
                    <Search />
                    <UserPhoto />
                </div>

                <Form className="max-w-full p-[3.75rem]" callback={editData}>
                    <section className="w-full">
                        <picture className="w-full mb-8 flex justify-center">
                            <UserPhoto size="medium" />
                        </picture>

                        <section className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
                            <Input title="Nome" value={user.username} />
                            <Input title="email" type="email" value={user.email} />
                            <Select 
                                title="Sexo" 
                                options={[
                                    {name: "Masculino", value: "M"}, 
                                    {name: "Feminino", value: "F"}
                                ]} 
                                value={user.sex}
                            />
                            <Input title="Data de nascimento" type="date" value={user.date_birthday} />
                            <Input title="Número do Telefone" value={user.phone} />
                            <Input title="Senha" type="password" value={user.password} />
                        </section>
                    </section>

                        <DivButton 
                            text="Editar" 
                            className="w-[28.75rem] self-end mt-36" 
                            hrefCancel="/home" 
                        />
                </Form>
            </section>
        </>
    )
}