import { refreshToken } from "./token";

const hostApi = process.env.REACT_APP_LINK_API

export const postHemos = async (title, latitude, longitude) => {
    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
            // "Authorization": `Bearer ${await refreshToken()}`
		},
        body: JSON.stringify({title, latitude, longitude})
	};

    const obj = await fetch(`${hostApi}/api/users/`, config)
        .then(res => res.json())
        .catch(err => console.log(`Ocorreu um error: ${err}`))

    return obj
}

export const getHemos = async () => {
    const config = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
            // "Authorization": `Bearer ${await refreshToken()}`
		},
	};

    const obj = await fetch(`${hostApi}/api/hemos/`, config)
        .then(res => res.json())
        .catch(err => console.log(`Ocorreu um error: ${err}`))

    return obj
}