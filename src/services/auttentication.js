import Cookies from 'js-cookie'

export const signIn = (token) => {
    Cookies.set("token", token)
}

export const signOut = () => {
    Cookies.remove("token")
}

export const isAuthenticated = () => {
    const token = Cookies.get("token")
    
    if (token) {
        return true
    }

    return false
}