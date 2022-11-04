import React from "react";

import ContentForm from '../components/ContentForm'
import DivButton from "../components/DivButton";
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form>
            <Logo />
            
            <Title text="Criar Conta" />

            <Input title="Email" placeholder="Ex: joao@gmail.com" />
            <Input title="Usuário" placeholder="Ex: João" />
            <Input title="Senha" type="password" placeholder="Ex: 12345" />
            <Input title="Digite a senha novamente" type="password" placeholder="Ex: 12345" />

            <DivButton text="Criar" hrefCancel="/login" />
        </Form>
    </ContentForm>
)