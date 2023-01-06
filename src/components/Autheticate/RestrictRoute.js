import React from "react";
import { Navigate } from 'react-router-dom'

import { isAuthenticated } from '../../services/auttentication'

export default (props) => {
    if (isAuthenticated()) {
        return <Navigate to="/home" />
    }
    return <>{props.children}</>
}