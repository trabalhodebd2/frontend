import React from "react"

import UserPhoto from "../components/UserPhoto"
import DivButton from "../components/DivButton"
import MenuLeft from "../components/MenuLeft"
import Title from '../components/Title'
import Input from '../components/Input'
import Form from "../components/Form"


export default () => (
    <main className="bg-white-100 content">
        <MenuLeft button_position={2} />
        <section className="w-full h-full p-[3.75rem]">
            <div className="w-full mb-9 flex justify-end">
                <UserPhoto />
            </div>
            <Form className="max-w-full items-start">
                <Title text="Cadastrar um novo hemonúcleo" className="self-start" />

                <Input title="Nome" placeholder=" " />

                <div className="flex gap-10">
                    <Input title="Latitude" placeholder=" " />
                    <Input title="Longitude" placeholder=" " />
                </div>

                <DivButton text="Cadastrar" className="w-[28.75rem] self-end" />
            </Form>
        </section>
    </main>
)