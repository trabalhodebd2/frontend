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
        .catch(error => console.log(`Ocorreu um error: ${error}`))

    return token
}