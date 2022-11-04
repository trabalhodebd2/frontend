import React from "react";

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
            
            <Title text="Recuperar Conta" />

            <Input title="Digite a nova senha" type="password" placeholder="Ex: 12345" />
            <Input title="Digite a senha novamente" type="password" placeholder="Ex: 12345" />

            <DivButton text="Recuperar" hrefCancel="/login" />
        </Form>
    </ContentForm>
)