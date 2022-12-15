import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { signIn } from "../services/auttentication"
import { getValuesOfElement } from "../services/elements"
import { postUser } from "../services/crudUser"
import { getToken } from "../services/token"

import MensageError from "../components/MensageError"
import ContentForm from '../components/ContentForm'
import DivButton from "../components/DivButton"
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const [elementError, setElementError] = useState(<></>)

    const registreUser = async (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [email, name, pass, retryPass] = getValuesOfElement(form, "input")

        if (pass !== retryPass) {
            const textError = "As duas senhas devem ser iguais"
            setElementError(<MensageError text={textError} />)
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
            const textError = "Email ou Usuario já existente"
            setElementError(<MensageError text={textError} />)
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

                {elementError}

                <DivButton text="Criar" hrefCancel="/login" />
            </Form>
        </ContentForm>
    )
}