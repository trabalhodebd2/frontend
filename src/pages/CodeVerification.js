import React from "react";

import ContentForm from '../components/ContentForm'
import InputToken from '../components/InputToken'
import Button from '../components/Button'
import Title from '../components/Title'
import Card from '../components/Card'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Logo />
        <Card>
            <Title text="Digite o código de verificação" />
            <InputToken title="Codigo" />

            <div className="flex justify-between w-full my-8">
                <Button text="Cancelar" href="/login" />
                <Button text="Enviar" href="/recuperar_conta" full={true} />
            </div>
        </Card>
    </ContentForm>
)