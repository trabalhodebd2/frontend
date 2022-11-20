import React from "react"
import { useNavigate } from "react-router-dom"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => {
    const navigate = useNavigate()

    const verifyEmail = (event) => {
        navigate("/codigo_verificacao")
    }

    return (
        <>
            <Form callback={verifyEmail}>
                <Logo />
                
                <Title text="Digite o email de verificação" />
                <Input title="Email" type="email" />

                <DivButton hrefCancel="/login" />
            </Form>
        </>
    )
}