import React, {useEffect, useState} from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated } from "../services/auttentication"
import { getHemos } from "../services/crudHemos"

import ListHemonucleus from "../components/ListHemonucleus"
import DivButton from "../components/DivButton"
import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/Search"
import Title from "../components/Title"
import Form from "../components/Form"

export default () => {
    const navigate = useNavigate()

    // const [listHemos, setListHemos] = useState([])
    
    useEffect(() => {
        // setListHemos(getHemos());
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])

    const viewHemo = (event) => {
        event.preventDefault()
        navigate("/home")
    }

    return (
        <>
            <MenuLeft button_position={3} />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex justify-end">
                    <UserPhoto />
                </div>

                <Form className="max-w-full" callback={viewHemo}>
                    <section className="mb-10 self-start w-full space-y-6">
                        <Title text="Pesquisar hemonúcleo pelo nome" />
                        <Search type={2} placeholder="Digite o nome do hemonúcleo" />
                    </section>

                    <section className="self-start w-full space-y-6">
                        <Title text="Pesquisar hemonúcleo pelo nome" />
                        <ListHemonucleus  />
                    </section>

                    <DivButton 
                        text="Visualizar" 
                        hrefCancel="/home" 
                        className="w-[28.75rem] gap-[3.75rem] self-end" 
                    />
                </Form>
            </section>
        </>
    )
}