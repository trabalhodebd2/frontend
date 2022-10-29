import React from "react";

import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Logo from '../components/Logo'

export default () => (
    <main className='bg-white-100 w-screen h-screen p-16'>
        <Logo />
        <Card>
            <h1 className="text-lg font-bold tracking-wider">Olá, seja bem vindo!</h1>
            
            <Input title="Usuário" placeholder="Ex: João" />
            <Input title="Senha" type="password" placeholder="Ex: 12345" />

            <div className="flex justify-between w-full my-8">
            <Button text="Criar uma conta" />
            <Button text="Entrar" full={true} />
            </div>

            <a className="underline text-sm text-secondary cursor-pointer">Esqueceu a senha?</a>
        </Card>
    </main>
)