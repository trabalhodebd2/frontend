import React, {useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import { getValuesOfElement } from "../services/elements"
import { getUser } from "../services/crudUser"

import PrivateRoute from "../components/Autheticate/PrivateRoute"
import UserPhoto from "../components/img/UserPhoto"
import DivButton from "../components/button/DivButton"
import MenuLeft from "../components/MenuLeft"
import Select from "../components/input/Select"
import Search from "../components/input/Search"
import Input from "../components/input/Input"
import Form from "../components/forms/Form"

export default () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({})

    useEffect(() => {
        const updateUser = async () => {
            const userObj = await getUser()
            setUser(userObj)
        }
    
        updateUser()
    }, [])

    const editData = (event) => {
        const form = event.currentTarget
        const [name, email, dateBirth, telephone, pass] = getValuesOfElement(form, "input")
        const sex = form.querySelector("select")
        
        navigate("/home")
    }

    return (
        <PrivateRoute>
            <MenuLeft />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex">
                    <Search />
                    <UserPhoto haveCardData={false} />
                </div>

                <Form className="max-w-full p-[3.75rem]" callback={editData}>
                    <section className="w-full">
                        <picture className="w-full mb-8 flex justify-center">
                            <UserPhoto size="medium" />
                        </picture>

                        <section className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
                            <Input title="Nome" value={user.full_name} />
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
        </PrivateRoute>
    )
}