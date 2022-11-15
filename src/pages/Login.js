import React from "react"
import { Navigate } from 'react-router-dom'
import { signIn } from "../controller/auttentication"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form callback={loginUser}>
            <Logo />
            
            <Title text="Olá, seja bem vindo!" />
            
            <Input title="Usuário" />
            <Input title="Senha" type="password" />

            <DivButton text="Entrar" textCancel="Criar uma conta" hrefCancel="/cadastro" />

            <a 
                className="underline text-base text-secondary mt-7 
                    cursor-pointer hover:text-secondary-dark duration-300"
                href="/verificacao"
            >Esqueceu a senha?</a>
        </Form>
    </ContentForm>
)

const loginUser = (event) => {
    const elementForm = event.currentTarget
    const elements = elementForm.querySelectorAll("input")

    const [inputName, inputPass] = [...elements]
    const [name, pass] = [inputName.value, inputPass.value]

    signIn()
    return <Navigate to="/home/"/>
}