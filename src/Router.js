import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from './services/auttentication'

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

const elementRestricted = (Component) => {
    if (isAuthenticated()) {
        return <Navigate to="/home" />
    }
    return <Component />
}

const elementPrivate = (Component) => {
    if (isAuthenticated()) {
        return <Component /> 
    }
    return <Navigate to="/login" />
}

export default () => (
    <Routes>
        <Route path="/" element={<Loading />} /> 
        
        <Route path="/login" element={elementRestricted(Login)} /> 

        <Route path="/cadastro" element={elementRestricted(Registration)} /> 
        
        <Route path="/verificacao" element={elementRestricted(Verification)} /> 
        
        <Route path="/codigo_verificacao" element={elementRestricted(CodeVerification)} /> 
        
        <Route path="/recuperar_conta" element={elementRestricted(RetrieveAccount)} /> 
        
        <Route path="/home" element={elementPrivate(Home)} /> 

        <Route path="/home/:id" element={elementPrivate(Home)} /> 
        
        <Route path="/account" element={elementPrivate(Account)} /> 
        
        <Route path="/registrar_hemonucleo" element={elementPrivate(RegistrationHemonucleus)} /> 

        <Route path="/visualizar_hemonucleo" element={elementPrivate(ViewHemonucleus)} /> 

        <Route path="*" element={<NotFound />} />
    </Routes>
)