import React from "react"
import { getValuesOfInputs } from "../controller/elements"
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from "../controller/auttentication"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const loginUser = (event) => {
        const form = event.currentTarget
        const [name, pass] = getValuesOfInputs(form)
        
        signIn()
        navigate("/home")
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