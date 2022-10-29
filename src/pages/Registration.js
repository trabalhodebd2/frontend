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
            <Title text="Criar Conta" />

            <Input title="Email" placeholder="Ex: joao@gmail.com" />
            <Input title="Usuário" placeholder="Ex: João" />
            <Input title="Senha" type="password" placeholder="Ex: 12345" />
            <Input title="Digite a senha novamente" type="password" placeholder="Ex: 12345" />

            <div className="flex justify-between w-full my-4">
                <Button text="Cancelar" />
                <Button text="Criar" full={true} />
            </div>
        </Card>
    </ContentForm>
)