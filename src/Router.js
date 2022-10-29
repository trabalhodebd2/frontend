import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Registration from './pages/Registration'
import RetrieveAccount from './pages/RetrieveAccount'
import Verification from './pages/Verification'
import Login from './pages/Login'

export default () => (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>

        <Route exact path="/cadastro">
            <Registration />
        </Route>

        <Route exact path="/verificacao">
            <Verification />
        </Route>

        <Route exact path="/recuperar_conta">
            <RetrieveAccount />
        </Route>
    </Switch>
)