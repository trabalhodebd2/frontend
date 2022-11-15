import React from "react"
import { useNavigate } from 'react-router-dom'
import { signIn } from "../controller/auttentication"
import { getValuesOfInputs } from "../controller/elements"

import ContentForm from '../components/ContentForm'
import DivButton from "../components/DivButton"
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const registreUser = (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [email, name, pass, retryPass] = getValuesOfInputs(form)

        if (pass === retryPass) {
            signIn()
            navigate("/home")
        } else {
            alert("As duas senhas devem ser iguais")
        }
    }

    return (
        <ContentForm>
            <Form callback={registreUser}>
                <Logo />
                
                <Title text="Criar Conta" />

                <Input title="Email" type="email" />
                <Input title="Usuário" />
                <Input title="Senha" type="password" />
                <Input title="Digite a senha novamente" type="password" />

                <DivButton text="Criar" hrefCancel="/login" />
            </Form>
        </ContentForm>
    )
}