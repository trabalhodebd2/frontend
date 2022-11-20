import Cookies from "js-cookie"

const hostApi = process.env.REACT_APP_LINK_API

export const getToken = async (username, password) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({username, password})
	};

    const token = await fetch(`${hostApi}/api/login/`, config)
        .then(res => res.json())
        .catch(err => console.log(`Ocorreu um error: ${err}`))

    return token
}

export const refreshToken = () => {
    const token = Cookies.get("token")
    const refrash = token.refrash

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({refrash})
	};

    const newToken = fetch(`${hostApi}/api/token_refresh/`, config)
        .then(res => res.json())
        .catch(err => console.log(`Ocorreu um error: ${err}`))

    return newToken
}