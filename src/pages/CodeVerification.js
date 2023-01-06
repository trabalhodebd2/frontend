import React from "react"
import { useNavigate } from "react-router-dom"
import { getValuesOfElement } from "../services/elements"

import RestrictRoute from "../components/Autheticate/RestrictRoute"
import ContentForm from '../components/forms/ContentForm'
import InputToken from '../components/input/InputToken'
import DivButton from '../components/button/DivButton'
import Title from '../components/Title'
import Form from '../components/forms/Form'
import Logo from '../components/img/Logo'

export default () => {
    const navigate = useNavigate()

    const verifyCode = (event) => {
        const form = event.currentTarget
        const listValues = getValuesOfElement(form, "input")
        const number = listValues.join()

        navigate("/recuperar_conta")
    }

    return (
        <RestrictRoute>
            <ContentForm>
                <Form callback={verifyCode}>
                    <Logo />
                    
                    <Title text="Digite o código de verificação" />
                    <InputToken title="Codigo" />

                    <DivButton hrefCancel="/login" />
                </Form>
            </ContentForm>
        </RestrictRoute>
    )
}