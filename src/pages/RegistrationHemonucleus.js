import React, {useEffect} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { getValuesOfInputs } from "../controller/elements"
import { isAuthenticated } from "../controller/auttentication"

import UserPhoto from "../components/UserPhoto"
import DivButton from "../components/DivButton"
import MenuLeft from "../components/MenuLeft"
import Title from '../components/Title'
import Input from '../components/Input'
import Form from "../components/Form"


export default () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])

    const registreHemo = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [name, long, lati] = getValuesOfInputs(form)

        navigate("/home")
    }

    return (
        <main className="bg-white-100 content">
            <MenuLeft button_position={2} />
            <section className="w-full h-full p-[3.75rem]">
                <div className="w-full mb-9 flex justify-end">
                    <UserPhoto />
                </div>
                
                <Form className="max-w-full items-start" callback={registreHemo}>
                    <Title text="Cadastrar um novo hemonúcleo" className="self-start" />

                    <Input title="Nome" placeholder=" " />

                    <div className="flex gap-10 w-full">
                        <Input title="Latitude" type="number" placeholder=" " />
                        <Input title="Longitude" type="number" placeholder=" " />
                    </div>

                    <DivButton 
                        text="Cadastrar" 
                        className="w-[28.75rem] self-end" 
                        hrefCancel="/home" 
                    />
                </Form>
            </section>
        </main>
    )
}