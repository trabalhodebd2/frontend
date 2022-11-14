import React from "react"

import ContentForm from '../components/ContentForm'
import DivButton from '../components/DivButton'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form>
            <Logo />
            
            <Title text="Digite o email de verificação" />
            <Input title="Email" placeholder="Ex: joao@gmail.com" />

            <DivButton hrefCancel="/login" />
        </Form>
    </ContentForm>
)