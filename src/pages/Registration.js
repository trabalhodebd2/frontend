import React from "react"
import { useNavigate } from 'react-router-dom'
import { signIn } from "../services/auttentication"
import { getValuesOfElement } from "../services/elements"
import { postUser } from "../services/crudUser"
import { getToken } from "../services/token"

import ContentForm from '../components/ContentForm'
import DivButton from "../components/DivButton"
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const registreUser = async (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [email, name, pass, retryPass] = getValuesOfElement(form, "input")

        if (pass !== retryPass) {
            alert("As duas senhas devem ser iguais")
            return;
        }

        const [obj, status] = await postUser(email, name, pass)
        console.log(obj)
        console.log(status)

        if (status === 201) {
            const token = getToken(name, pass)
            signIn(token.refresh)
            navigate("/home")
        } else {
            alert("Usuario ou Email já existente")
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