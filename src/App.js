import './App.css';
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <section className='bg-[#EDF2F4] w-screen h-screen p-16'>
      <Card>
        <h1 className="text-lg font-bold tracking-wider">Olá, seja bem vindo!</h1>
        
        <Input title="Usuário" placeholder="Ex: João" />
        <Input title="Senha" type="password" placeholder="Ex: 12345" />

        <div className="flex justify-between w-full my-8">
          <Button text="Criar uma conta" color="#fff" />
          <Button text="Entrar" />
        </div>

        <a className="underline text-sm text-[#8D99AE] cursor-pointer">Esqueceu a senha?</a>
      </Card>
    </section>
  );
}

export default App;
