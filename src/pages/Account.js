import React, {useEffect} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated } from "../controller/auttentication"
import { getValuesOfInputs } from "../controller/elements"

import UserPhoto from "../components/UserPhoto"
import DivButton from "../components/DivButton"
import MenuLeft from "../components/MenuLeft"
import Select from "../components/Select"
import Search from "../components/Search"
import Input from "../components/Input"
import Form from "../components/Form"

export default () => {
    useEffect(() => {
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])

    const navigate = useNavigate()

    const editData = (event) => {
        const form = event.currentTarget
        const [name, email, dateBirth, telephone, pass] = getValuesOfInputs(form)
        const sex = form.querySelector("select")
        
        navigate("/home")
    }

    return (
        <>
            <MenuLeft />
            <section className="w-full h-full p-[3.75rem]">
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
                            <Input title="Nome" value="José da Silva Júnior" />
                            <Input title="email" type="email" value="jose@gmail.com" />
                            <Select 
                                title="Sexo" 
                                options={[
                                    {name: "Masculino", value: "M"}, 
                                    {name: "Feminino", value: "F"}
                                ]} 
                                value="M"
                            />
                            <Input title="Data de nascimento" type="date" value="2002-05-21" />
                            <Input title="Número do Telefone" value="+55 (83) 99101-7224" />
                            <Input title="Senha" type="password" value="************" />
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