import Cookies from 'js-cookie'

export const signIn = () => {
    Cookies.set('token', 'token-temporario', {
        expires: 1
    })
}

export const signOut = () => {
    Cookies.remove('token')
}

export const isAuthenticated = () => {
    const token = Cookies.get('token')
    
    if (token) {
        return true
    }

    return false
}