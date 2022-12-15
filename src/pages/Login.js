import React, { useEffect, useState } from "react"

import { getValuesOfElement } from "../services/elements"
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from "../services/auttentication"
import { getToken } from "../services/token"

import MensageError from '../components/MensageError'
import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const [elementError, setElementError] = useState(<></>)

    const loginUser = async (event) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const [name, pass] = getValuesOfElement(form, "input")
        const token = await getToken(name, pass)
        
        if (token.access) {
            signIn(token.refresh)
            navigate("/home")
        } else {
            const textError = "Usuário  e/ou senha incorreta(os)"
            setElementError(<MensageError text={textError} />)
        }
    }

    return (
        <ContentForm>
            <Form callback={loginUser}>
                <Logo />
                
                <Title text="Olá, seja bem vindo!" />
                
                <Input title="Usuário" />
                <Input title="Senha" type="password" />

                {elementError}

                <DivButton text="Entrar" textCancel="Criar uma conta" hrefCancel="/cadastro" />

                <Link 
                    className="underline text-base text-secondary mt-7 
                        cursor-pointer hover:text-secondary-dark duration-300"
                    to="/verificacao"
                >Esqueceu a senha?</Link>
            </Form>
        </ContentForm>
    )
}