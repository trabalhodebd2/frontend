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
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return token
}

export const refreshToken = () => {
    const refresh = Cookies.get("token")

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({refresh})
	};

    const newToken = fetch(`${hostApi}/api/refresh_token/`, config)
        .then(res => res.json())
        .then(res => res.access)
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return newToken
}