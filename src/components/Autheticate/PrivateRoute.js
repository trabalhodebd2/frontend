import React from "react";
import { Navigate } from 'react-router-dom'

import { isAuthenticated } from '../../services/auttentication'

export default (props) => {
    if (isAuthenticated()) {
        return <>{props.children}</>
    }
    return <Navigate to="/login" />
}