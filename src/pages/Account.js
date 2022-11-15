import React from "react"

import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/Search"
import Input from "../components/Input"
import DivButton from "../components/DivButton"

export default () => (
    <main className="bg-white-100 content">
        <MenuLeft />
        <section className="w-full h-full p-[3.75rem]">
            <div className="w-full mb-9">
                <Search />
                {/* <UserPhoto /> */}
            </div>

            <section className="bg-white w-full p-[3.75rem] rounded-2xl">
                <section>
                    <picture className="w-full mb-8 flex justify-center">
                       <UserPhoto size="medium" />
                    </picture>

                    <section className="grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-4">
                        <Input title="Nome" value="José da Silva Júnior" />
                        <Input title="email" type="email" value="jose@gmail.com" />
                        <Input title="Sexo" type="option" value="M" />
                        <Input title="Data de nascimento" type="date" value="2002-05-21" />
                        <Input title="Número do Telefone" value="+55 (83) 99101-7224" />
                        <Input title="Senha" type="password" value="************" />
                    </section>
                </section>

                <section className="mt-36 flex justify-end">
                    <DivButton text="Editar" className="w-[28.75rem]" hrefCancel="/home" />
                </section>
            </section>
        </section>
    </main>
)