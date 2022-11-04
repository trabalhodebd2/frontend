import React from "react";

import ContentForm from '../components/ContentForm'
import Button from '../components/Button'
import Title from '../components/Title'
import Input from '../components/Input'
import Form from '../components/Form'
import Logo from '../components/Logo'

export default () => (
    <ContentForm>
        <Form>
            <Logo />
            
            <Title text="Digite o email de verificação" />
            <Input title="Email" placeholder="Ex: João" />

            <div className="flex justify-between w-full mt-6 gap-2">
                <Button text="Cancelar" href="/login" />
                <Button text="Enviar" full={true} href="/codigo_verificacao" />
            </div>
        </Form>
    </ContentForm>
)