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
            <Title text="Recuperar Conta" />

            <Input title="Digite a nova senha" type="password" placeholder="Ex: 12345" />
            <Input title="Digite a senha novamente" type="password" placeholder="Ex: 12345" />

            <div className="flex justify-between w-full my-5 gap-2">
                <Button text="Cancelar" href="/login"/>
                <Button text="Recuperar" full={true} />
            </div>
        </Card>
    </ContentForm>
)