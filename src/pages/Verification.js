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
            <Title text="Digite o email de verificação" />
            <Input title="Email" placeholder="Ex: João" />

            <div className="flex justify-between w-full my-8">
                <Button text="Cancelar" />
                <Button text="Enviar" full={true} />
            </div>
        </Card>
    </ContentForm>
)