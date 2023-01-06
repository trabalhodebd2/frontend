import React, {useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import { getValueInputRadioChecked } from "../services/elements"
import { getHemos } from "../services/crudHemos"

import PrivateRoute from "../components/Autheticate/PrivateRoute"
import ListHemonucleus from "../components/ListHemonucleus"
import DivButton from "../components/button/DivButton"
import UserPhoto from "../components/img/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/input/Search"
import Title from "../components/Title"
import Form from "../components/forms/Form"

export default () => {
    const navigate = useNavigate()

    const [listHemos, setListHemos] = useState([])

    useEffect(() => {
        const updateList = async () => {
            const allHemos = await getHemos()
            setListHemos(allHemos)
        }

        updateList()
    }, [])

    const viewHemo = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const valueId = getValueInputRadioChecked(form)
        if (valueId) {
            navigate(`/home/${valueId}`)
        } else {
            navigate("/home")
        }
    }

    return (
        <PrivateRoute>
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
                        <ListHemonucleus list={listHemos} />
                    </section>

                    <DivButton 
                        text="Visualizar" 
                        hrefCancel="/home" 
                        className="w-[28.75rem] gap-[3.75rem] self-end" 
                    />
                </Form>
            </section>
        </PrivateRoute>
    )
}