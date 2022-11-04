import React from "react";

import ContentForm from '../components/ContentForm'
import InputToken from '../components/InputToken'
import Button from '../components/Button'
import Title from '../components/Title'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form>
            <Logo />
            
            <Title text="Digite o código de verificação" />
            <InputToken title="Codigo" />

            <div className="flex justify-between w-full my-5 gap-2">
                <Button text="Cancelar" href="/login" />
                <Button text="Enviar" href="/recuperar_conta" full={true} />
            </div>
        </Form>
    </ContentForm>
)