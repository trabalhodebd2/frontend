import { refreshToken } from "./token";

const hostApi = process.env.REACT_APP_LINK_API

export const postHemos = async (title, lat, long) => {
    const geometry = { "type": "Point", "coordinates": [Number(lat), Number(long)] }

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
            // "Authorization": `Bearer ${await refreshToken()}`
		},
        body: JSON.stringify({title, geometry})
	};

    const obj = await fetch(`${hostApi}/api/hemos/`, config)
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