import React from "react"
import { useNavigate } from "react-router-dom"
import { getValuesOfElement } from "../services/elements"

import RestrictRoute from "../components/Autheticate/RestrictRoute"
import ContentForm from '../components/forms/ContentForm'
import DivButton from '../components/button/DivButton'
import Title from '../components/Title'
import Input from '../components/input/Input'
import Form from '../components/forms/Form'
import Logo from '../components/img/Logo'

export default () => {
    const navigate = useNavigate()

    const registrePassword = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [pass, retryPass] = getValuesOfElement(form, "input")

        if (pass === retryPass) {
            navigate("/login")
        } else {
            alert("As duas senhas devem ser iguais")
        }
    }

    return (
        <RestrictRoute>
            <ContentForm>
                <Form callback={registrePassword}>
                    <Logo />
                    
                    <Title text="Recuperar Conta" />

                    <Input title="Digite a nova senha" type="password" />
                    <Input title="Digite a senha novamente" type="password" />

                    <DivButton text="Recuperar" hrefCancel="/login" />
                </Form>
            </ContentForm>
        </RestrictRoute>
    )
}