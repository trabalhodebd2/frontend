import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RegistrationHemonucleus from './pages/RegistrationHemonucleus'
import CodeVerification from './pages/CodeVerification'
import RetrieveAccount from './pages/RetrieveAccount'
import Registration from './pages/Registration'
import Verification from './pages/Verification'
import Loading from './pages/Loading'
import Login from './pages/Login'
import Home from './pages/Home'

export default () => (
    <Switch>
        <Route exact path="/">
            <Loading />
        </Route>

        <Route exact path="/login">
            <Login />
        </Route>

        <Route exact path="/cadastro">
            <Registration />
        </Route>

        <Route exact path="/verificacao">
            <Verification />
        </Route>

        <Route exact path="/codigo_verificacao">
            <CodeVerification />
        </Route>

        <Route exact path="/recuperar_conta">
            <RetrieveAccount />
        </Route>

        <Route exact path="/home">
            <Home />
        </Route>

        <Route exact path="/registrar_hemonucleo">
            <RegistrationHemonucleus />
        </Route>
    </Switch>
)