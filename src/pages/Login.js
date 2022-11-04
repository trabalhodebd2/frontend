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
            
            <Title text="Olá, seja bem vindo!" />
            
            <Input title="Usuário" placeholder="Ex: João" />
            <Input title="Senha" type="password" placeholder="Ex: 12345" />

            <DivButton text="Entrar" textCancel="Criar uma conta" hrefCancel="/cadastro" />

            <a 
                className="underline text-base text-secondary mt-8 
                    cursor-pointer hover:text-secondary-dark duration-300"
                href="/verificacao"
            >Esqueceu a senha?</a>
        </Form>
    </ContentForm>
)