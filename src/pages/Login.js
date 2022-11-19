import React from "react"
import { getValuesOfInputs } from "../services/elements"
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from "../services/auttentication"
import { getToken } from "../services/token"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const loginUser = async (event) => {
        event.preventDefault()
        
        const form = event.currentTarget
        const [name, pass] = getValuesOfInputs(form)
        const token = await getToken(name, pass)
        
        if (token.access) {
            signIn(token)
            navigate("/home")
        } else {
            alert("O usuario ou senha estão errados")
        }
    }

    return (
        <ContentForm>
            <Form callback={loginUser}>
                <Logo />
                
                <Title text="Olá, seja bem vindo!" />
                
                <Input title="Usuário" />
                <Input title="Senha" type="password" />

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