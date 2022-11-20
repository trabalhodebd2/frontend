import React from "react"
import { useNavigate } from 'react-router-dom'
import { signIn } from "../services/auttentication"
import { getValuesOfInputs } from "../services/elements"
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
        const [email, name, pass, retryPass] = getValuesOfInputs(form)

        if (pass !== retryPass) {
            alert("As duas senhas devem ser iguais")
            return;
        }

        const obj = await postUser(email, name, pass)

        if (obj.username) {
            const token = getToken(name, pass)
            signIn(token.refresh)
            navigate("/home")
        } else {
            alert(obj.error)
            console.log(obj)
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