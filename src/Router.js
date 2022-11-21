import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RegistrationHemonucleus from './pages/RegistrationHemonucleus'
import CodeVerification from './pages/CodeVerification'
import ViewHemonucleus from './pages/ViewHemonucleus'
import RetrieveAccount from './pages/RetrieveAccount'
import Registration from './pages/Registration'
import Verification from './pages/Verification'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'
import Account from './pages/Account'
import Login from './pages/Login'
import Home from './pages/Home'

export default () => (
    <Routes>
        <Route path="/" element={<Loading />} /> 
        
        <Route path="/login" element={<Login />} /> 
        
        <Route path="/cadastro" element={<Registration />} /> 
        
        <Route path="/verificacao" element={<Verification />} /> 
        
        <Route path="/codigo_verificacao" element={<CodeVerification />} /> 
        
        <Route path="/recuperar_conta" element={<RetrieveAccount />} /> 
        
        <Route path="/home" element={<Home />} /> 

        <Route path="/home/:id" element={<Home />} /> 
        
        <Route path="/account" element={<Account />} /> 
        
        <Route path="/registrar_hemonucleo" element={<RegistrationHemonucleus />} /> 

        <Route path="/visualizar_hemonucleo" element={<ViewHemonucleus />} /> 

        <Route path="*" element={<NotFound />} />
    </Routes>
)