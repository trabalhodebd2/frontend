import React from "react"
import { useNavigate } from "react-router-dom"

import RestrictRoute from "../components/Autheticate/RestrictRoute"
import ContentForm from '../components/forms/ContentForm'
import DivButton from '../components/button/DivButton'
import Title from '../components/Title'
import Input from '../components/input/Input'
import Form from '../components/forms/Form'
import Logo from '../components/img/Logo'

export default () => {
    const navigate = useNavigate()

    const verifyEmail = () => {
        navigate("/codigo_verificacao")
    }

    return (
        <RestrictRoute>
            <ContentForm>
                <Form callback={verifyEmail}>
                    <Logo />
                    
                    <Title text="Digite o email de verificação" />
                    <Input title="Email" type="email" />

                    <DivButton hrefCancel="/login" />
                </Form>
            </ContentForm>
        </RestrictRoute>
    )
}