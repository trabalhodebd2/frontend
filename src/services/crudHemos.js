import { refreshToken } from "./token";

const hostApi = process.env.REACT_APP_LINK_API

export const postHemos = async (title, lat, lng) => {
    const geometry = { "type": "Point", "coordinates": [Number(lat), Number(lng)] }

    const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
            // "Authorization": `Bearer ${await refreshToken()}`
		},
        body: JSON.stringify({title, geometry, uf: "PB", city: "Cajazeiras"})
	};

    const obj = await fetch(`${hostApi}/api/hemos/`, config)
        .then(res => res.json())
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

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
        .then(all => all.features)
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return obj
}

export const getHemosById = async (id) => {
    const config = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
            // "Authorization": `Bearer ${await refreshToken()}`
		},
	};

    const list = await fetch(`${hostApi}/api/hemos/${id}`, config)
        .then(res => res.json())
        .catch(() => alert("Error ao se conectar ao Servidor BackEnd"))

    return list
}