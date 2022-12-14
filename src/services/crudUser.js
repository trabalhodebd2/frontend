import { refreshToken } from "./token";

const hostApi = process.env.REACT_APP_LINK_API

export const postUser = async (email, username, password) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
        body: JSON.stringify({email, username, password})
	};

    const obj = await fetch(`${hostApi}/api/users/`, config)
        .then(res => [res.json(), res.status])
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return obj
}

export const getUser = async () => {
    const config = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
            "Authorization": `Bearer ${await refreshToken()}`
		},
	};

    const obj = await fetch(`${hostApi}/api/users/me/`, config)
        .then(res => res.json())
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return obj
}