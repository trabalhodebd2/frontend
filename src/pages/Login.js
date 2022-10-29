import React from "react";

import ContentForm from '../components/ContentForm'
import Button from '../components/Button'
import Title from '../components/Title'
import Input from '../components/Input'
import Card from '../components/Card'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Logo />
        <Card>
            <Title text="Olá, seja bem vindo!" />
            
            <Input title="Usuário" placeholder="Ex: João" />
            <Input title="Senha" type="password" placeholder="Ex: 12345" />

            <div className="flex justify-between w-full my-8">
                <Button text="Criar uma conta" href="/cadastro" />
                <Button text="Entrar" full={true} />
            </div>

            <a 
                className="underline text-sm text-secondary cursor-pointer"
                href="/verificacao"
            >Esqueceu a senha?</a>
        </Card>
    </ContentForm>
)