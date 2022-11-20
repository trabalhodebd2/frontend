import React from "react"
import { useNavigate } from "react-router-dom"
import { getValuesOfInputs } from "../services/elements"

import ContentForm from '../components/ContentForm'
import InputToken from '../components/InputToken'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const verifyCode = (event) => {
        const form = event.currentTarget
        const listValues = getValuesOfInputs(form)
        const number = listValues.join()

        navigate("/recuperar_conta")
    }

    return (
        <ContentForm>
            <Form callback={verifyCode}>
                <Logo />
                
                <Title text="Digite o código de verificação" />
                <InputToken title="Codigo" />

                <DivButton hrefCancel="/login" />
            </Form>
        </ContentForm>
    )
}