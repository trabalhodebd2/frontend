import React from "react"
import { useNavigate } from "react-router-dom"
import { getValuesOfInputs } from "../services/elements"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const registrePassword = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [pass, retryPass] = getValuesOfInputs(form)

        if (pass === retryPass) {
            navigate("/login")
        } else {
            alert("As duas senhas devem ser iguais")
        }
    }

    return (
        <ContentForm>
            <Form callback={registrePassword}>
                <Logo />
                
                <Title text="Recuperar Conta" />

                <Input title="Digite a nova senha" type="password" />
                <Input title="Digite a senha novamente" type="password" />

                <DivButton text="Recuperar" hrefCancel="/login" />
            </Form>
        </ContentForm>
    )
}