import React from "react"

import ContentForm from '../components/ContentForm'
import InputToken from '../components/InputToken'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form>
            <Logo />
            
            <Title text="Digite o código de verificação" />
            <InputToken title="Codigo" />

            <DivButton hrefCancel="/login" />
        </Form>
    </ContentForm>
)