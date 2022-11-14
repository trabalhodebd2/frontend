import React from "react"

import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Title from '../components/Title'
import Form from "../components/Form"

export default () => (
    <main className="bg-white-100 content">
        <MenuLeft button_position={2} />
        <section className="w-full h-full p-[3.75rem]">
            <div className="w-full mb-9 flex justify-end">
                <UserPhoto />
            </div>
            <Form className="w-full">
                <Title text="Olá, seja bem vindo!" />
            </Form>
        </section>
    </main>
)